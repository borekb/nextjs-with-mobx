export async function fetchPost(id) {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(`This is post ID ${id}`);
    }, 500)
  );
}
