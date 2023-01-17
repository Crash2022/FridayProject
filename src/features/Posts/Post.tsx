import React, {useState, ChangeEvent} from 'react';
import {updatePostTC} from "../../state/posts-reducer";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";
import {useAppSelector} from "../../common/hooks/useAppSelector";

type PostType = {
    // post: PostsType
    postId: number
}

export const Post: React.FC<PostType> = ({postId}) => {

    const dispatch = useAppDispatch()
    // @ts-ignore
    const post = useAppSelector(state => state.posts.byId[postId])
    // @ts-ignore
    const author = useAppSelector(state => state.authors.byId[post.authorId])

    // console.log(post)

    const [editMode, setEditMode] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>(post.text)

    const onClickEditSpanHandler = () => {
        setEditMode(true)
    }

    const onClickNotEditSpanHandler = () => {
        setEditMode(false)
        dispatch(updatePostTC(post.id, inputValue))
    }

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }

    return (
        <div style={{marginTop: '10px'}}>
            <b>{author.name}</b>
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