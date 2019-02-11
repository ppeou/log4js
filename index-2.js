(function aa() {
  console.warn('Logger 4');
  const logger1 = logger.set({});
  logger1.trace('Trace:: cheese testing');
  logger1.debug('Debug:: Got cheese.');
  logger1.info('Info:: Cheese is Comté.');
  logger1.warn('WARN:: Cheese is quite smelly.');
  logger1.error('Error:: Cheese is too ripe!');
  logger1.fatal('Fatal:: Cheese was breeding ground for listeria.');

  console.warn('Logger 5');
  const logger2 = logger1.set({
    method: 'should see getFile', level: 'error',
    format: '%t %d [%p] %A %f %M %m'
  });
  logger2.trace('Trace:: cheese testing');
  logger2.debug('Debug:: Got cheese.');
  logger2.info('Info:: Cheese is Comté.');
  logger2.warn('WARN:: Cheese is quite smelly.');
  logger2.error('Error:: Cheese is too ripe!');
  logger2.fatal('Fatal:: Cheese was breeding ground for listeria.');

  console.warn('Logger 6');
  const logger3 = logger1.set({file: 'index-2-reduce.js', method: 'getSomethingElese'});
  logger3.trace('Trace:: cheese testing');
  logger3.debug('Debug:: Got cheese.');
  logger3.info('Info:: Cheese is Comté.');
  logger3.warn('WARN:: Cheese is quite smelly.');
  logger3.error('Error:: Cheese is too ripe!');
  logger3.fatal('Fatal:: Cheese was breeding ground for listeria.');




})();
const logger1 = logger.set({file: 'ABC.js'});
console.warn('Logger 7');
class ABC {
  constructor() {
    this.getAA = this.getAA.bind(this);
  }
  getAA(myMsg) {
    logger1.error(myMsg);
  }
}

const abc = new ABC();
abc.getAA('Class ABC :: getAA');
