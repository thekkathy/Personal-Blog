import React, { useState } from "react";
import Card from "../Card";
import { useHistory } from "react-router-dom";

function PostInput() {
  
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [pic, setPic] = useState("");
    
    return (
    <div class='card'>
      <form onSubmit={(e) => {e.preventDefault(); console.log(title + " " + text + " " + pic)}}>
        <div class="form-group">
          <input
            type="text"
            class="form-control item"
            id="username"
            placeholder="Title"
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div class="form-group">
          <textarea
            type="text"
            class="form-control item"
            id="email"
            placeholder="Your blog post"
            onChange={(e)=>setText(e.target.value)}
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control item"
            id="phone-number"
            placeholder="Picture URL"
            onChange={(e)=>setPic(e.target.value)}
          />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}
export default PostInput;
