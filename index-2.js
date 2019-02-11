Object.assign(log4js.config, {level: 'warn', username: '123SETH'});

const logger = log4js.getLogger({ method: 'sola', file: 'index.js'});
logger.trace('Trace:: cheese testing');
logger.debug('Debug:: Got cheese.');
logger.info('Info:: Cheese is Comté.');
logger.warn('WARN:: Cheese is quite smelly.');
logger.error('Error:: Cheese is too ripe!');
logger.fatal('Fatal:: Cheese was breeding ground for listeria.');

console.warn('Logger 1');
const logger1 = logger.set({file: 'action.js', level: 'error',
  format: '%t %d [%p] %A %f %M %m'});
logger1.trace('Trace:: cheese testing');
logger1.debug('Debug:: Got cheese.');
logger1.info('Info:: Cheese is Comté.');
logger1.warn('WARN:: Cheese is quite smelly.');
logger1.error('Error:: Cheese is too ripe!');
logger1.fatal('Fatal:: Cheese was breeding ground for listeria.');

console.warn('Logger 2');
const logger2 = logger.set({file: 'reduce.js', method: 'daa'});
logger2.trace('Trace:: cheese testing');
logger2.debug('Debug:: Got cheese.');
logger2.info('Info:: Cheese is Comté.');
logger2.warn('WARN:: Cheese is quite smelly.');
logger2.error('Error:: Cheese is too ripe!');
logger2.fatal('Fatal:: Cheese was breeding ground for listeria.');
