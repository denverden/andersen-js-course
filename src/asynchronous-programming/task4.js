export async function getData() {
  let response = await fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG');
  const { getUsersData } = await response.json();
  if (getUsersData) {
    response = await fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC');
    console.log(await response.json());
  }
}
