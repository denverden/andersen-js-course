const urls = [
  'http://www.json-generator.com/api/json/get/cevhxOsZnS',
  'http://www.json-generator.com/api/json/get/cguaPsRxAi',
  'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
  'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
  'http://www.json-generator.com/api/json/get/ceQMMKpidK',
];

const getRequestParallel = async () => {
  await Promise.all(urls.map(url => fetch(url).then(response => response.json()))).then(values =>
    console.log(values)
  );
};

const getRequestConsist = () => {
  const result = [];
  urls.forEach(async url => {
    await fetch(url).then(async response => result.push(await response.json()));
  });
  console.log(result);
};

export { getRequestParallel, getRequestConsist };
