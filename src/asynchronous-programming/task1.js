const createCb = str => () => console.log(str);

const foo = (x, cb) => {
  if (x > 10) {
    console.log('x > 10');
    cb();
  } else {
    console.log('x <= 10');
  }
};

export { foo, createCb };
