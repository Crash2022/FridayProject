import React, {useState, ChangeEvent} from 'react';
import {PostsType, updatePostAC} from "../../state/posts-reducer";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";

type PostType = {
    post: PostsType
    postId: number
}

export const Post: React.FC<PostType> = ({post, postId}) => {

    const dispatch = useAppDispatch()

    const [editMode, setEditMode] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')

    const onClickEditSpanHandler = () => {
        setEditMode(true)
        setInputValue(post.text)
    }

    const onClickNotEditSpanHandler = () => {
        setEditMode(false)
        dispatch(updatePostAC(postId, inputValue))
    }

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }

    return (
        <div style={{marginTop: '10px'}}>
            <b>{post.author}</b>
            <br/>
            {
                editMode ?
                    <input
                        type="text"
                        value={inputValue}
                        onChange={onChangeInputHandler}
                        onBlur={onClickNotEditSpanHandler}
                    />
                    : <span onDoubleClick={onClickEditSpanHandler}>{post.text}</span>
            }
            <br/>
            likes: {post.likes}
            <hr/>
        </div>
    )
}