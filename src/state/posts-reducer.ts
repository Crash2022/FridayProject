// state
import {AppThunkType} from "./store";
import {fridayAPI} from "../api/api";

const initialState: PostsInitialStateType = {
    posts: [] as PostsType[]
}

export type PostsInitialStateType = {
    posts: PostsType[]
}

export type PostsType = {
    id: number
    author: string
    text: string
}

// reducer
export const postsReducer = (state: PostsInitialStateType = initialState, action: PostsActionsTypes): PostsInitialStateType => {
    switch (action.type) {
        case 'POSTS/SET_POSTS': {
            return {...state, posts: action.payload.posts};
        }
        default:
            return state;
    }
}

// actions
export type PostsActionsTypes = SetPostsACType;

export type SetPostsACType = ReturnType<typeof setPostsAC>
export const setPostsAC = (posts: PostsType[]) => ({
    type: 'POSTS/SET_POSTS', payload: {posts}
} as const)

// thunks
export const setPostsTC = (): AppThunkType => async (dispatch) => {
    const posts = await fridayAPI.getPosts()
    dispatch(setPostsAC(posts))
}