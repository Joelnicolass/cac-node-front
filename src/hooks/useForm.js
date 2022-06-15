import { useState } from "react";

const useForm = (data) => {
  const [form, setForm] = useState(data);

  const [image, setImage] = useState({
    preview: "",
    raw: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  return [form, handleChange, image, handleImage];
};

export default useForm;
