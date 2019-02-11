((_w) => {
  const code = {
    '%A': 'app',
    '%d': 'timestamp',
    '%t': 'username',
    '%m': 'message',
    '%p': 'level',
    '%M': 'method',
    '%f': 'file',
  };
  const getFormatter = (fm) => {
    const format = Object.keys(code).reduce((p, c) => {
      return p.replace(new RegExp(`${c}`, 'g'), `\${${code[c]}}`);
    }, fm);
    return (templateData) => {
      return new Function(
        `{${Object.keys(templateData).join(',')}}`,
        'return `' + format + '`'
    )(templateData)};
  };
  const _log_levels = ['all', 'trace', 'debug', 'info', 'warn', 'error', 'fatal', 'off'];
  const _action = ['', 'trace', 'debug', 'info', 'warn', 'error', 'fatal'];

  let formatterMap = {};

  let idx = 0;

  const [LEVELS, LEVELS_BY_NAME, LEVELS_BY_ID] = ((items) => {
    let uk;
    return items.reduce((p, k, i) => {
      uk = k.toUpperCase();
      p[0][k] = i;
      p[0][uk] = i;
      p[0][i] = i;
      p[1][uk] = i;
      p[2][i] = uk;

      return p;
    }, [{}, {}, {}]);
  })(_log_levels);

  const utcDate = () => (new Date()).toISOString().substr(0, 23).replace('T', ' ');
  const getCaller = (callee) => {
    return (callee.caller || {}).name || '';
  }

  const _globalConfig = {};

  const getGlobalConfig = () => {
   const _opts = Object.assign({}, _globalConfig);
    if(_opts.level) {
      _opts.level = LEVELS[_opts.level];
    }
    return _opts;
  };

  const _defaultOpts = {
    app: '',
    level: LEVELS.ALL,
    username: '',
    file: '',
    method: '',
    delimiter: '\t',
    format: '%d [%p] %A %t %f %M %m',
  };

  function generator(opts, i) {
    return function(message) {
      if (i >= opts.level) {
        const {app, username, file, method, formatter} = opts;
        const text = formatter({
          timestamp: utcDate(),
          level: LEVELS_BY_ID[i],
          app,
          username,
          file,
          method: method || getCaller(arguments.callee), message});
        console.log(text);
      }
    }
  };


  function getInstant(opts) {
    const _userOpts = Object.assign({}, opts);
    if (_userOpts && _userOpts.level) {
      _userOpts.level = LEVELS.hasOwnProperty(_userOpts.level) ? LEVELS[_userOpts.level] : LEVELS.ALL;
    }
    let _opts = Object.assign({}, _defaultOpts, getGlobalConfig(), _userOpts);
    console.log(_opts);
    const fmtter = formatterMap[_opts.format] || getFormatter(_opts.format);
    if(!formatterMap[_opts.format]) {
      formatterMap[_opts.format] = fmtter;
    }
    _opts.formatter = fmtter;
    let instant = _action.reduce((p, k, i) => {
      if (k) {
        p[k] = generator(_opts, i,);
      }
      return p;
    }, {id: (idx++)});

    instant.set = (nopts) => {
      return getInstant(Object.assign({}, _opts, nopts));
    };
    return instant;
  }


  window.log4js = (() => {
    return {getLogger: getInstant, config: _globalConfig}
  })();


})(window);
