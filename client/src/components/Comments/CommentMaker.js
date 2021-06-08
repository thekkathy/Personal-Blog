import React, { useState, useEffect, useContext } from 'react';
import { UsersContext } from '../../context/usersContext';
import '../../styles/base.css';
import '../../styles/comments.css';
import addComment from '../../utils/addComment';
import Comments from './Comments';

const CommentMaker = ({post_id, isBlog}) => {
    
    const { users } = useContext(UsersContext);
    const [temp, setTemp] = useState("");
    const [changed, setChanged] = useState(true);

    return (
        <div>
            { users && (
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
                                    <input type="submit" value="Post Comment" class="btn btn-primary btn-sm rounded-0" id="inputGroupPrepend2" 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if(temp !== ''){
                                            addComment(isBlog, temp, users.uid, post_id);
                                            setChanged(!changed);
                                            }
                                        }}/>
                                    </div>
                                </div>
                            </div>
                        </form>
                        </div>
                        <Comments isBlog={isBlog} post_id={post_id} changed={changed}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CommentMaker;
