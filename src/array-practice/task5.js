/**
 * Реализовать функцию createGenerator в этом файле, и экспортировать ее.
 *
 * При каждом вызове метода .next() происходит возврат следующего значения из массива
 * Когда все элементы будут возвращены,
 * следующие вызовы метода .next() должны возвращать строку 'Complete!'
 *
 * В решении функции-генераторы (function*) не использовать.
 *
 * const generator = createGenerator([1, '6', 3, 2]);
 * generator.next(); -> 1
 * generator.next(); -> '6'
 * generator.next(); -> 3
 * generator.next(); -> 2
 * generator.next(); -> 'Complete!'
 * generator.next(); -> 'Complete!'
 */

export default function createGenerator(arr) {
  let position = 0;
  return {
    next() {
      let result = 'Complete!';

      if (arr[position] !== undefined) {
        result = arr[position];
        position += 1;
      }

      return result;
    },
  };
}
