import './styles/main.css';
import { foo, createCb } from './asynchronous-programming/task1';
import { parseJSON, successCb, failureCb } from './asynchronous-programming/task2';
import { delay } from './asynchronous-programming/task3';
import { getData } from './asynchronous-programming/task4';
import { getRequestParallel, getRequestConsist } from './asynchronous-programming/task5';
import { getResolvedPromise } from './asynchronous-programming/task6';
import { foo as fooTask7 } from './asynchronous-programming/task7';
import { foo as fooTask8 } from './asynchronous-programming/task8';
import { foo as fooTask9 } from './asynchronous-programming/task9';
import { Musican } from './asynchronous-programming/task10';

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

// async/await только для того чтобы вывести в консоль все по порядку.
(async () => {
  console.group('Task3');
  await delay(1000).then(value => console.log(`Done with ${value}`));
  console.groupEnd();

  console.group('Task4');
  await getData().then(value => console.log(value));
  console.groupEnd();

  console.group('Task5');
  await getRequestParallel();
  await getRequestConsist();
  console.groupEnd();

  console.group('Task6');
  await getResolvedPromise(500);
  console.groupEnd();

  console.group('Task7');
  await fooTask7();
  console.groupEnd();

  console.group('Task8');
  await fooTask8('https://jsonplaceholder.typicode.com/users');
  await fooTask8('ht://jsonplaceholder.typicode.com/users');
  console.groupEnd();

  console.group('Task9');
  await fooTask9();
  console.groupEnd();

  console.group('Task10');
  const musican = new Musican('http://jsonplaceholder.typicode.com/albums');
  console.log(await musican.getAlbums());
  console.groupEnd();
})();
