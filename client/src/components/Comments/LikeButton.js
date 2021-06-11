import React, { useState, useEffect, useContext } from 'react';
import '../../styles/base.css';
import '../../styles/comments.css';
import { addCommentLike, removeCommentLike } from '../../utils/updateLike';
import { UsersContext } from '../../context/usersContext';

const LikeButton = ({ isBlog, post_id, comment_id, liked_by, num_likes }) => {

    const [isLiked, setIsLiked] = useState(false);
    const [numLikes, setNumLikes] = useState(num_likes);
    const { users } = useContext(UsersContext);

    useEffect(() => {
        if (typeof liked_by !== 'undefined' && !isLiked) {
            liked_by.forEach(e => {
                if (e.stringValue === users.uid)
                    setIsLiked(true);
            });
        }
    }, [])

    return (
        <div>
            {isLiked ?
                <button
                    className="btn-icon icon-dark"
                    onClick={() => {
                        removeCommentLike(isBlog, post_id, comment_id, users.uid);
                        setIsLiked(false);
                        let num = numLikes - 1;
                        setNumLikes(num);
                    }}>
                    <div className="container mx-auto">
                        <div className="row">
                            <i class="fas fa-heart mt-2 mx-auto"></i>
                        </div>
                        <div className="row">
                            <div className="text-center mx-auto">
                                {numLikes}
                            </div>
                        </div>
                    </div>
                </button>
                :
                <button
                    className="btn-icon icon-dark"
                    onClick={() => {
                        addCommentLike(isBlog, post_id, comment_id, users.uid);
                        setIsLiked(true);
                        let num = numLikes + 1;
                        setNumLikes(num);
                    }}>
                    <div className="container mx-auto">
                        <div className="row">
                            <i class="far fa-heart mt-2 mx-auto"></i>
                        </div>
                        <div className="row">
                            <div className="text-center mx-auto">
                                {numLikes}
                            </div>
                        </div>
                    </div>
                </button>
            }
        </div>
    )
}

export default LikeButton;