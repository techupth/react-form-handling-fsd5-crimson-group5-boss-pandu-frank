import { useState } from "react";

function ProductForm() {
  const [userName, setUserName] = useState(""); //input name
  const [userImg, setUserImg] = useState(""); //input url
  const [userPrice, setUserPrice] = useState(Number);
  const [userDescription, setUserDescription] = useState("");

  const handleCreate = (event) => {
    event.preventDefault();
    alert(
      `
      name: ${userName}, 
      price: ${userPrice}, 
      image: ${userImg}, 
      description: ${userDescription}
      `
    );
  };

  return (
    <form className="post-form" onSubmit={handleCreate}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            value={userName}
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            value={userImg}
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => {
              setUserImg(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            value={userPrice}
            type="number"
            placeholder="Enter price here"
            onChange={(event) => {
              setUserPrice(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            value={userDescription}
            type="text"
            placeholder="Enter description here"
            onChange={(event) => {
              setUserDescription(event.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
