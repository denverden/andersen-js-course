const asyncBar = async () => 'Some string!';

export async function foo() {
  console.log(await asyncBar());
}
