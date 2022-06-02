import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postData();
  };

  const postData = async () => {
    const dataForm = {
      name: form.name,
      password: form.password,
    };
    try {
      const response = await axios.post("http://localhost:5000/user", dataForm);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user");
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h1>LOGIN</h1>
      <form>
        <input
          type="text"
          value={form.name}
          onChange={handleChange}
          name="name"
        />
        <input
          type="password"
          value={form.password}
          onChange={handleChange}
          name="password"
        />
        <button onClick={handleSubmit}>Login</button>
      </form>

      <button onClick={getData}>Get Data</button>
    </>
  );
};

export default App;
