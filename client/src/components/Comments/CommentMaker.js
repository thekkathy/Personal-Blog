import React, { useState, useEffect, useContext } from 'react';
import { CommentsContext } from '../../context/commentsContext';
import { UsersContext } from '../../context/usersContext';

const CommentMaker = () => {
    
    const { comments, setComments } = useContext(CommentsContext);
    const { user } = useContext(UsersContext);
    
    return (
        <div>
            {user && (
                <div>
                    <p>Create New Comment</p>
                    <div class="container">
                        <div class="row">
                            <form>

                            </form>
                        </div>
                        <div class="row">
                            <button>
                                
                            </button>
                        </div>
                    </div>
                </div>
            )}
            CommentMaker
        </div>
    )
}

export default CommentMaker;