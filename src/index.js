import './styles/main.css';
import { foo, createCb } from './asynchronous-programming/task1';
import { parseJSON, successCb, failureCb } from './asynchronous-programming/task2';
import { delay } from './asynchronous-programming/task3';

console.group('Task1');
console.log(`test1 x=5`);
foo(5, createCb('cb'));
console.log(`test2 x=20`);
foo(20, createCb('cb'));
console.groupEnd();

console.group('Task2');
console.log(`test1 {"x": 10}`);
parseJSON('{"x": 10}', successCb, failureCb);
console.log(`test2 {x}`);
parseJSON('{x}', successCb, failureCb);
console.groupEnd();

(async () => {
  console.group('Task3');
  await delay(1000).then(value => console.log(`Done with ${value}`));
  console.groupEnd();
})();
