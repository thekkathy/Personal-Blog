//This function gets the blog posts from the database and updates state
export default async function getBlogPosts() {
    console.log("fetching blog posts ");
    const url = new URL("http://localhost:8000/blog_posts/get");
    let res = await fetch(url)
        .then((resp) => resp.json())
    return res;
}