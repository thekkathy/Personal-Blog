import React from 'react';
import BlogPostsProvider from "../context/blogPostsContext";
import CommentsProvider from "../context/commentsContext";
import ForumProvider from "../context/forumContext";
import StoreProvider from "../context/storeContext";
import UsersProvider from "../context/usersContext";
import UserProvider from "../context/UserProvider";



const ContextWrap = ({children}) => {
    return (
        <div>
            <BlogPostsProvider>
                <CommentsProvider>
                    <ForumProvider>
                        <StoreProvider>
                            <UsersProvider>
                                <UserProvider>
                                {children}
                                </UserProvider>
                            </UsersProvider>
                        </StoreProvider>
                    </ForumProvider>
                </CommentsProvider>
            </BlogPostsProvider>
        </div>
    )
}

export default ContextWrap
