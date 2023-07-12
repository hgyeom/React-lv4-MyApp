import axios from "axios";

// 회원가입 구현시 사용
export const signup = async (body) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_MOCK_SERVER_URL}/register`,
      body
    );
    return response;
  } catch (error) {
    alert(error.response.data.message);
    return;
  }
};

// 로그인
export const login = async (body) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_MOCK_SERVER_URL}/login`,
      body
    );
    console.log(response);
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
    return error.response.data.message;
  }
};
