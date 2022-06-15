import axios from "axios";
import React from "react";
import useForm from "../../hooks/useForm";

const Home = () => {
  const [form, handleInputChange, image, handleImage] = useForm();

  const [imgBack, setImgBack] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(image);

    // create form data
    const formData = new FormData();
    formData.append("avatar", image.raw);

    // send form data to server
    const response = await axios.post(
      "http://localhost:5000/user/image/62aa42faaca7a6ff54fbbe93",
      formData
    );
  };

  return (
    <>
      <h1>ENVIAR IMAGEN AL BACK</h1>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" name="avatar" onChange={handleImage} />

        <hr />

        <img
          src={
            image.preview
              ? image.preview
              : "https://thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png"
          }
          alt="preview"
          style={{ width: "20%", height: "20%" }}
        />

        <hr />
        <input type="submit" value="enviar" />
      </form>

      <h1>OBTENER IMAGEN DEL BACK</h1>

      <img
        src={
          imgBack
            ? `data:image/jpeg;base64,${imgBack}`
            : "https://thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png"
        }
        alt="preview"
        style={{ width: "20%", height: "20%" }}
      />

      <hr />

      <button
        onClick={async () => {
          const response = await axios.get(
            "http://localhost:5000/user/image/62aa42faaca7a6ff54fbbe93"
          );

          setImgBack(response.data);
        }}
      >
        obtener
      </button>
    </>
  );
};

export default Home;
