import React, { useState, useEffect } from 'react';
import Card from '../Card';
import '../../styles/base.css';
import '../../styles/comments.css';
import LikeButton from './LikeButton';
import getComments from "../../utils/getComments";

const Comments = ({ isBlog, post_id, changed }) => {

const [comments, setComments] = useState();

  useEffect(() => {
    async function fetchCommentsUE() {
      const c = await getComments(isBlog, post_id);
      console.log(c);
      setComments(c);
    }

    fetchCommentsUE();
  }, [post_id, changed, isBlog]);

    return (
        <div>
            {comments && comments.map(e => {
                return <div>
                    <Card
                        sideCol={true}
                        noSetWidthHeight={true}
                        sideColClassName='commentSideCol'
                        outerCardClassName="border-bottom"
                        noOuterCard={true}
                        cardSide={
                            <div className="my-auto">
                                <LikeButton
                                    isBlog={isBlog}
                                    post_id={post_id}
                                    comment_id={e.doc_id}
                                    liked_by={e?.liked_by}
                                    num_likes={e.num_likes}
                                />
                            </div>
                        }
                        cardContent={
                            <div>
                                <p><b>{e.author_name}</b></p>
                                <div>{e.text}</div>
                            </div>
                        } />
                </div>
            })}
        </div>
    )
}

export default Comments
