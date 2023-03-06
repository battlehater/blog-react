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

const getAllComments = () => {
  return fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
    res.json()
  );
};

const apiService = {
  getAllPosts,
  getAllUsers,
  getAllComments,
};

export default apiService;
