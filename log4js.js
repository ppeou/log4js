((_w) => {

  const _log_levels = ['all', 'trace', 'debug', 'info', 'warn', 'error', 'fatal', 'off'];

  const [LEVELS, LEVELS_BY_NAME, LEVELS_BY_ID] = ((items) => {
    let uk;
    return items.reduce((p, k, i) => {
      uk = k.toUpperCase();
      p[0][k] = i;
      p[0][uk] = i;
      p[1][uk] = i;
      p[2][i] = uk;

      return p;
    }, [{}, {}, {}]);
  })(_log_levels);
  console.log(LEVELS);

  const utcDate = () => (new Date()).toISOString().substr(0,23).replace('T', ' ');

  const getText = () =>  `${utcDate()} ${} ${} ${} ${}`;

  const logger = ({level, prefix, username}) => {

  };


  window.log4js = (() => {
    const getLogger = () => {
      return () => {
      };
    };
    return {getLogger,}
  })();


})(window);
