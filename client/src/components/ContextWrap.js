import React from 'react';
import BlogPostsProvider from "../context/blogPostsContext";
import CommentsProvider from "../context/commentsContext";
import ForumProvider from "../context/forumContext";
import StoreProvider from "../context/storeContext";
import UsersProvider from "../context/usersContext";


const ContextWrap = ({children}) => {
    return (
        <div>
            <BlogPostsProvider>
                <CommentsProvider>
                    <ForumProvider>
                        <StoreProvider>
                            <UsersProvider>
                                {children}
                            </UsersProvider>
                        </StoreProvider>
                    </ForumProvider>
                </CommentsProvider>
            </BlogPostsProvider>
        </div>
    )
}

export default ContextWrap
