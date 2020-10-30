import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const CreatePost = () => {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (url) {
      fetch("/createpost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title,
          body,
          pic: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.err) {
            alert(data.err);
            return;
          } else {
            console.log(data);
            history.push("/");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [url]);

  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "insta-clone");
    data.append("cloud_name", "shubinsta-clone008");
    fetch("https://api.cloudinary.com/v1_1/shubinsta-clone008/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setUrl(data.url), console.log("knl" + data.url))
      .catch((err) => console.log(err));

    console.log(title, body, url);
  };
  return (
    <div>
      <div
        className="card input-field"
        style={{
          margin: "30px auto",
          maxWidth: "500px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <input
          placeholder="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
        />
        <div className="file-field input-field">
          <div className="btn blue darken-1">
            <span>Upload Image</span>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path-validate" type="text" />
          </div>
        </div>
        <button
          className="btn waves-effect waves-light blue darken-1"
          onClick={postDetails}
        >
          Submit Post
        </button>
      </div>
    </div>
  );
};
export default CreatePost;
