
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data);
}

// getUsers();


const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const data = await res.json();

  data.forEach ((post) => {
    console.log(post.title);
  })
}

getPosts();