const newPromise = value => {
  return Promise.resolve(value);
};

export const getResolvedPromise = value =>
  newPromise(value)
    .then(item => {
      if (item > 300) {
        throw new Error('Ошибка');
      }
    })
    .catch(err => console.log(err.message))
    .finally(console.log('This is Finally!'));
