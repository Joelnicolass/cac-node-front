import React, { useContext } from "react";
import { login } from "../../services/login";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

const Login = () => {
  const { authDispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, handleChange] = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(form.email, form.password);

    if (user) {
      authDispatch({ type: "LOGIN", payload: user });
      navigate("/home", {
        replace: true,
      });
    }
  };

  return (
    <>
      <h1>LOGIN</h1>
      <form>
        <input
          type="text"
          value={form.email}
          onChange={handleChange}
          name="email"
        />
        <input
          type="password"
          value={form.password}
          onChange={handleChange}
          name="password"
        />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </>
  );
};

export default Login;
