import React from 'react';
import {PostsType} from "../../state/posts-reducer";

type PostType = {
    post: PostsType
}

export const Post: React.FC<PostType> = ({post}) => {
    return (
        <div style={{marginTop: '10px'}}>
            <b>{post.author}</b>
            <br/>
            {post.text}
            <br/>
            likes: {post.likes}
            <hr/>
        </div>
    )
}