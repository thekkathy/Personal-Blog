import React, { useState, useEffect, useContext } from 'react';
import Card from '../Card';
import getComments from '../../utils/getComments';
import { UsersContext } from '../../context/usersContext';
import '../../styles/base.css';
import '../../styles/comments.css';
import { addCommentLike } from '../../utils/updateLike';
import LikeButton from './LikeButton';

const Comments = ({isBlog, post_id, comments, changed}) => {

    const { user } = useContext(UsersContext);

    return (
        <div>
           {comments && comments.map(e => {
                    return <div>
                        <Card 
                        sideCol={true}
                        noSetWidthHeight={true} 
                        sideColClassName='commentSideCol'
                        cardSide = {
                            <div>
                                <LikeButton isBlog={isBlog} post_id={post_id} comment_id={e.doc_id} liked_by={e?.liked_by} num_likes={e.num_likes}/>
                            </div>
                        }
                        cardContent={
                            <div>
                            <p>{e.author_name}</p>
                            <div>{e.text}</div>
                            </div>
                    }>  </Card>
                </div>
            })}
        </div>
    )
}

export default Comments
