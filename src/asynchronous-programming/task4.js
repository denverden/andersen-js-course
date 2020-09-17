const URL_ACCESS = 'http://www.json-generator.com/api/json/get/cfQCylRjuG';
const URL_DATA = 'http://www.json-generator.com/api/json/get/cfVGucaXPC';

export const getData = () => {
  const promise = new Promise(resolve => {
    fetch(URL_ACCESS)
      .then(response => response.json())
      .then(({ getUsersData }) => {
        if (getUsersData) {
          fetch(URL_DATA)
            .then(response => response.json())
            .then(data => resolve(data));
        }
      });
  });

  return promise.then(data => console.log(data));
};
