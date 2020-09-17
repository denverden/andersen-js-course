const parseJSON = (jsonStr, successCb, failureCb) => {
  try {
    successCb(JSON.parse(jsonStr));
  } catch (err) {
    failureCb(err);
  }
};

const successCb = result => console.log('Success parse!\n', result);

const failureCb = err => console.log('Failure parse!\n', err);

export { parseJSON, successCb, failureCb };
