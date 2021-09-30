import React, { useState } from "react";
import axios from "axios";

const CreateSpeaker = () => {
  const [newSpeaker, setNewSpeaker] = useState({
    name: "",
    position: "",
    description: "",
    charge: 0,
    photo: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newSpeaker.photo);
    formData.append("name", newSpeaker.name);
    formData.append("position", newSpeaker.position);
    formData.append("description", newSpeaker.description);
    formData.append("charge", newSpeaker.charge);

    axios
      .post("http://localhost:5001/users/fileupload", formData)
      .then((res) => {
        console.log(res);
        alert("inserted");
        window.location = "/list-speaker";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = (e) => {
    localStorage.removeItem("EditorLoggedIn");
    window.location = "/";
  };

  const onChange = (e) => {
    setNewSpeaker({ ...newSpeaker, [e.target.name]: e.target.value });
  };

  const onPhoto = (e) => {
    setNewSpeaker({ ...newSpeaker, photo: e.target.files[0] });
  };

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={logout}>
        Logout
      </button>

      <h1>Create speaker</h1>
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="subjectName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={newSpeaker.name}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subjectName" className="form-label">
            Position
          </label>
          <input
            type="text"
            className="form-control"
            id="position"
            name="position"
            value={newSpeaker.position}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subjectName" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={newSpeaker.description}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subjectName" className="form-label">
            Charge
          </label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            value={newSpeaker.charge}
            onChange={onChange}
          />
        </div>

        <input
          type="file"
          accept=".png, .jpg, .jpeg, .pdf, .pptx"
          name="photo"
          onChange={onPhoto}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateSpeaker;
