import React, {useEffect} from 'react';
import {useAppSelector} from "../../common/hooks/useAppSelector";
import {Post} from "./Post";
import {getPostsTC} from "../../state/posts-reducer";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";

export const Posts = () => {

    const dispatch = useAppDispatch()
    const ids = useAppSelector(state => state.posts.allIds)

    const style = {
        padding: '20px 0',
        fontWeight: 'bold',
        border: '1px solid black',
        backgroundColor: 'green',
        color: 'white'
    }

    useEffect(() => {
        dispatch(getPostsTC())
    }, [])

    return (
        <div>
            <div style={style}>Posts</div>
                {
                    ids.map(id => <Post key={id} postId={id}/>)
                }
        </div>
    )
}