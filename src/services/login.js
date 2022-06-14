import axios from "axios";

export const login = async (email, password) => {
  const dataForm = {
    email,
    password,
  };
  try {
    const response = await axios.post(
      "http://localhost:5000/auth/login",
      dataForm
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;
};
