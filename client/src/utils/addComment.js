import axios from 'axios';

//adds a comment to a blog or forum post
export default async function addComment(isBlog, text, user_id, post_id) {
    let url = "";
    if(isBlog){
        url = "http://localhost:8000/comments/blog/add";
    }
    else{
        url = "http://localhost:8000/comments/forum/add";
    }
    const c = {
        num_likes: 0,
        text: text,
        author: user_id,
        post_id: post_id,
    }
    axios.post(url, c).then(res => console.log(res));
}