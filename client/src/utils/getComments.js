import axios from 'axios';

//gets all comments for a post
export default async function getComments(isBlog, post_id) {
    let url = "";
    if(isBlog){
        url = "http://localhost:8000/comments/blog?id=";
    }
    else{
        url = "http://localhost:8000/comments/forum?id=";
    }
    url += post_id;
    let res = [];
    await axios.get(url)
        .then((resp) => {
            res = resp.data;
    });
    
    return res;
}