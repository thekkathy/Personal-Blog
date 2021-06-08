import React, { useState, useEffect } from "react";
//import Card from "../Card";
import { useHistory } from "react-router-dom";
import getBlogPosts from "../../utils/getBlogPosts";

function PostInput({
  isEdit,
  match: {
    params: { id },
  },
}) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [pic, setPic] = useState("");

  const history = useHistory();

  useEffect(() => {
    if (isEdit === true) {
      getBlogPosts().then((posts) => {
        posts.forEach((element) => {
          if (element.doc_id === id) {
            setTitle(element.title);
            setText(element.text);
            setPic(element.pic_url);
          }
        });
      });
    }
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    if (isEdit) {
      fetch("http://localhost:8000/blog_posts/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doc_id: id,
          title: title,
          text: text,
          pic_url: pic,
        }),
      }).then((resp) => {
        resp.json();
        history.push("/blog");
      });
    } else {
      fetch("http://localhost:8000/blog_posts/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          text: text,
          pic_url: pic,
        }),
      }).then((resp) => {
        resp.json();
        history.push("/blog");
      });
    }
  };

  return (
    <div class="card">
      <form onSubmit={submitForm}>
        <div class="form-group">
          <input
            defaultValue={title}
            type="text"
            class="form-control item"
            id="username"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="form-group">
          <textarea
            defaultValue={text}
            type="text"
            class="form-control item"
            id="email"
            placeholder="Your blog post"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div class="form-group">
          <input
            defaultValue={pic}
            type="text"
            class="form-control item"
            id="phone-number"
            placeholder="Picture URL"
            onChange={(e) => setPic(e.target.value)}
          />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">
            {isEdit === true ? "Edit Post" : "Create Post"}
          </button>
        </div>
      </form>
    </div>
  );
}
export default PostInput;
