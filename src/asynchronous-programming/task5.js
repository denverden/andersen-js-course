const urls = [
  'http://www.json-generator.com/api/json/get/cevhxOsZnS',
  'http://www.json-generator.com/api/json/get/cguaPsRxAi',
  'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
  'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
  'http://www.json-generator.com/api/json/get/ceQMMKpidK',
];

const getRequestParallel = () => {
  return Promise.all(urls.map(url => fetch(url).then(response => response.json()))).then(values =>
    console.log(values)
  );
};

const getRequestConsist = () => {
  const promise = urls.reduce(
    (acc, url) =>
      acc.then(added =>
        fetch(url)
          .then(response => response.json())
          .then(data => [...added, data])
      ),
    Promise.resolve([])
  );
  return promise.then(data => console.log(data));
};

export { getRequestParallel, getRequestConsist };
