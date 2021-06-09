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
            //console.log(resp.data);
            res = resp.data;
    });
    
    return res;
}
/*
const getComments = (isBlog, post_id) => {
    let url = "";
    if(isBlog){
        url = "http://localhost:8000/comments/blog?id=";
    }
    else{
        url = "http://localhost:8000/comments/forum?id=";
    }
    url += post_id;
    return axios.get(url)
        .then((res) => {
            if(res.data.status === 200)
                return res.data;
            else {
                alert(res.data.message);
                return false;
            }
    }).catch((err) => {
        alert("An error has occured");
    });
}

export default getComments;
*/