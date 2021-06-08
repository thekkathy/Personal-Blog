import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UsersContext } from '../../context/usersContext';
import '../../styles/base.css';
import '../../styles/comments.css';

const CommentMaker = ({post_id, isBlog}) => {
    
    const { user } = useContext(UsersContext);
    const [temp, setTemp] = useState("");

    const addComment = () => {
        let url = "";
        if(isBlog){
            url = "http://localhost:8000/comments/blog/add";
        }
        else{
            url = "http://localhost:8000/comments/forum/add";
        }
        const c = {
            num_likes: 0,
            text: temp,
            author: user.uid,
            post_id: post.id,
        }
        axios.post(url, c).then(res => console.log(res));
    }
    
    return (
        <div>
            { user && (
                <div>
                    <div class="container">
                    <h1 style={{color: '#094B5C', marginBottom: 20}}>Comments</h1>
                    <h5 style={{color: '#094B5C'}}>Create New Comment</h5>
                        <div class="row">
                        <form>
                            <div class="col-lg-10 mb-3">
                                <div class="input-group commentForm">
                                <input type="text" class="form-control rounded-0" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required 
                                    onChange={e=>{
                                        setTemp(e.target.value);
                                    }  
                                }/>
                                    <div class="input-group-prepend">
                                    <input type="submit" value="Post Comment" class="btn btn-primary btn-sm rounded-0" id="inputGroupPrepend2" onClick={addComment}/>
                                    </div>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CommentMaker;