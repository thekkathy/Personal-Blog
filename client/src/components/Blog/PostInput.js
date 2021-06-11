import React, { useState, useEffect } from "react";
import NavigateButton from "../NavigateButton";
import { useHistory, useParams } from "react-router-dom";
import getBlogPosts from "../../utils/getBlogPosts";
import "../../styles/base.css";
import "../../styles/postInput.css";

function PostInput({ isEdit }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [pic, setPic] = useState("");
  const [formatted, setFormatted] = useState("");

  const history = useHistory();
    const {id} = useParams();


    const formatText = (text) => {
        setFormatted()
    }


  useEffect(() => {
    if (isEdit === true) {
      getBlogPosts().then((posts) => {
        posts.forEach((element) => {
          if (element.doc_id === id) {
            setTitle(element.title);
            setText(element.text);
            setPic(element.pic_url);
            setFormatted(element.text);
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
    <div class="container form p-4">
      <h1>{isEdit ? "Edit Blog Post": "New Blog Post"}</h1>
      <form onSubmit={submitForm}>
        <div class="form-group">
          <label>Title</label>
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
            <label>Content</label>
          <textarea
            defaultValue={text}
            type="text"
            rows={12}
            class="form-control item"
            id="email"
            placeholder="Your blog post"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div class="form-group">
            <label>Picture URL</label>
          <input
            defaultValue={pic}
            type="text"
            class="form-control item"
            id="phone-number"
            placeholder="Picture URL"
            onChange={(e) => setPic(e.target.value)}
          />
        </div>
        <div class="form-group d-flex">
          <button type="submit" class="btn btn-dark mr-2">
            {isEdit === true ? "Save" : "Create Post"}
          </button>
          {isEdit ? 
            <NavigateButton buttonName="Cancel" url="/blog" color="danger" />
            :
            <NavigateButton buttonName="Back To Blog" url="/blog" color="dark" />
          }
          
        </div>
      </form>
    </div>
  );
}
export default PostInput;
