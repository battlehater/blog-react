const getAllPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

const getAllUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
};

const apiService = {
  getAllPosts,
  getAllUsers,
};

export default apiService;
