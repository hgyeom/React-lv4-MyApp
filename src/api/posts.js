// axios 요청이 들어가는 모든 모듈
import axios from "axios";

// GET
const getPosts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`);
  return response.data;
};

// 하나만
const getPost = async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`);
  return response.data;
};

// POST
const addPost = async (newPost) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, newPost);
};

// UPDATE
const updatePost = async (updatePost) => {
  await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/posts/${updatePost.id}`,
    updatePost
  );
};

// DELETE
const deletePost = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`);
};

// // 회원가입 구현시 사용
// export const signup = async (userData) => {
//   const response = await axios.post(
//     `${process.env.REACT_APP_SERVER_URL}/users`,
//     userData
//   );
//   return response.data;
// };

export { getPosts, getPost, addPost, deletePost, updatePost };
