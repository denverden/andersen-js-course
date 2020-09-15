import './styles/main.css';
import { foo, createCb } from './asynchronous-programming/task1';

console.group('Task1');
console.log(`test1 x=5`);
foo(5, createCb('cb'));
console.log(`test2 x=20`);
foo(20, createCb('cb'));
console.groupEnd();
