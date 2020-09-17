const getUsers = url => fetch(url);

export async function foo(url) {
  try {
    const response = await getUsers(url);
    const [user] = await response.json();
    console.log(user);
  } catch (err) {
    console.log('Error!', err);
  }
}
