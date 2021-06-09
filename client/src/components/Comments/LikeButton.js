import React, { useState, useEffect, useContext } from 'react';
import '../../styles/base.css';
import '../../styles/comments.css';
import { addCommentLike, removeCommentLike } from '../../utils/updateLike';
import { Button } from '@material-ui/core';
import { UsersContext } from '../../context/usersContext';

const LikeButton = ({isBlog, post_id, comment_id, liked_by, num_likes}) => {

    const [isLiked, setIsLiked] = useState(false);
    const [numLikes, setNumLikes] = useState(num_likes);
    const { users } = useContext(UsersContext);

    useEffect(() => {
        if(typeof liked_by !== 'undefined' && !isLiked){
            liked_by.forEach(e => {
                if(e.stringValue === users.uid)
                    setIsLiked(true);
            });
        }
    }, [])

    return (
        <div>
            <div className="row mx-auto">
                {numLikes}
            </div>
            {isLiked ? 
            <Button className='commentHeart' onClick={() => {
                removeCommentLike(isBlog, post_id, comment_id, users.uid);
                setIsLiked(false);
                let num = numLikes -1;
                setNumLikes(num);
            }}>
            <div className="row mx-auto">
                <i class="fas fa-heart"></i>
            </div>
            </Button>
            :  
            <Button className='commentHeart' onClick={() => {
                addCommentLike(isBlog, post_id, comment_id, users.uid);
                setIsLiked(true);
                let num = numLikes +1;
                setNumLikes(num);
            }}>
            <div className="row mx-auto">
                <i class="far fa-heart m-2"></i>
            </div>
            </Button> 
        }
        </div>
    )
}

export default LikeButton;