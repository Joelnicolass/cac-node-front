import { useState } from "react";

const useForm = (data) => {
  const [form, setForm] = useState(data);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return [form, handleChange];
};

export default useForm;
