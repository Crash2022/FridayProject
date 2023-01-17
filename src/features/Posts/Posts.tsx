import React, {useEffect} from 'react';
import {useAppSelector} from "../../common/hooks/useAppSelector";
import {Post} from "./Post";
import {setPostsTC} from "../../state/posts-reducer";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";

export const Posts = () => {
    const posts = useAppSelector(state => state.posts.posts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setPostsTC())
    }, [])

    return (
        <div>
            <div style={{padding: '20px 0', fontWeight: 'bold', border: '1px solid black'}}>Posts</div>
                {
                    posts.map(p => <Post key={p.id} post={p}/>)
                }
        </div>
    )
}