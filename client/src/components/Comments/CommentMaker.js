import React, { useState, useEffect, useContext } from 'react';
import { CommentsContext } from '...../context/CommentsContext';

const CommentMaker = () => {
    
    const { comments, setComments } = useContext(CommentsContext);
    
    return (
        <div>
            CommentMaker
        </div>
    )
}

export default CommentMaker;