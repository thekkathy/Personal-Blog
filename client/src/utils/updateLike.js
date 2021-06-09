import axios from 'axios';

//adds a like to a comment
export function addCommentLike(isBlog, post_id, comment_id, user_id) {
    let url = "";
    if(isBlog)
        url = 'http://localhost:8000/comment/blog/add_like';
    else
        url = 'http://localhost:8000/comment/forum/add_like';

    const c = {
        post_id: post_id,
        comment_id: comment_id,
        user_id: user_id,
    }

    axios.post(url, c).then(res => console.log(res));
}

export function removeCommentLike(isBlog, post_id, comment_id, user_id) {
    let url = "";
    if(isBlog)
        url = 'http://localhost:8000/comment/blog/remove_like';
    else
        url = 'http://localhost:8000/comment/forum/remove_like';

    const c = {
        post_id: post_id,
        comment_id: comment_id,
        user_id: user_id,
    }

    axios.post(url, c).then(res => console.log(res));
}