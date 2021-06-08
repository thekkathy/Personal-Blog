import React, { useState, useEffect, useContext } from 'react';
import Card from '../Card';
import getComments from '../../utils/getComments';
import { UsersContext } from '../../context/usersContext';
import '../../styles/base.css';
import '../../styles/comments.css';

const Comments = ({isBlog, post_id, changed}) => {

    const [comments, setComments] = useState([]);
    const { user } = useContext(UsersContext);

    useEffect(async ()=>{
        const c = await getComments(isBlog, post_id);
        setComments(c);
    }, [post_id, changed])
    
    return (
        <div>
           {comments.map(e => {
                console.log(e);
                    return <div>
                        <Card cardContent={
                            <div>{e.text}</div>
                    }>  </Card>
                </div>
            })}
        </div>
    )
}

export default Comments
