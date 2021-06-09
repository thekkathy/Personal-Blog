import React, { useState, useEffect, useContext } from 'react';
import Card from '../Card';
import getComments from '../../utils/getComments';
import { UsersContext } from '../../context/usersContext';
import '../../styles/base.css';
import '../../styles/comments.css';

const Comments = ({isBlog, post_id, comments, changed}) => {

    const { user } = useContext(UsersContext);

    return (
        <div>
           {comments && comments.map(e => {
                    return <div>
                        <Card cardContent={
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
