import React, { useState, useEffect, useContext } from "react";
import { UsersContext } from "../../context/usersContext";
import "../../styles/base.css";
import "../../styles/comments.css";
import addComment from "../../utils/addComment";
import getComments from "../../utils/getComments";
import Comments from "./Comments";

const CommentMaker = ({ post_id, isBlog }) => {
  const { users } = useContext(UsersContext);
  const [temp, setTemp] = useState("");
  const [changed, setChanged] = useState(true);
  const [comments, setComments] = useState();

  async function fetchComments() {
    const c = await getComments(isBlog, post_id);
    console.log(c);
    setComments(c);
  }

  useEffect(() => {
    fetchComments();
  }, [post_id, changed]);

  return (
    <div>
      {users && (
        <div>
          <div class="container">
            <h1 style={{ color: "#094B5C", marginBottom: 20 }}>Comments</h1>
            <h5 style={{ color: "#094B5C" }}>Create New Comment</h5>
            <div class="row">
              <form>
                <div class="col-lg-10 mb-3">
                  <div class="input-group commentForm">
                    <input
                      type="text"
                      class="form-control rounded-0"
                      id="validationDefaultUsername"
                      aria-describedby="inputGroupPrepend2"
                      required
                      onChange={(e) => {
                        setTemp(e.target.value);
                      }}
                    />
                    <div class="input-group-prepend">
                      <input
                        type="submit"
                        value="Post Comment"
                        class="btn btn-primary btn-sm rounded-0"
                        id="inputGroupPrepend2"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(changed);
                          if (temp !== "") {
                            addComment(
                              isBlog,
                              temp,
                              users.uid,
                              users.displayName,
                              post_id
                            );
                            setChanged(!changed);
                            fetchComments();
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <Comments
              isBlog={isBlog}
              post_id={post_id}
              comments={comments}
              changed={changed}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentMaker;
