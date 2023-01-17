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
    likes: number
}

// reducer
export const postsReducer = (state: PostsInitialStateType = initialState, action: PostsActionsTypes): PostsInitialStateType => {
    switch (action.type) {
        case 'POSTS/SET_POSTS': {
            return {...state, posts: action.payload.posts};
        }
        case 'POSTS/UPDATE_POST': {
            return {...state, posts: state.posts.map(p => p.id === action.payload.postId ? {...p, text: action.payload.text} : p)};
        }
        default:
            return state;
    }
}

// actions
export type PostsActionsTypes = SetPostsACType | UpdatePostACType;

export type SetPostsACType = ReturnType<typeof setPostsAC>
export const setPostsAC = (posts: PostsType[]) => ({
    type: 'POSTS/SET_POSTS', payload: {posts}
} as const)

export type UpdatePostACType = ReturnType<typeof updatePostAC>
export const updatePostAC = (postId: number, text: string) => ({
    type: 'POSTS/UPDATE_POST', payload: {postId, text}
} as const)

// thunks
export const setPostsTC = (): AppThunkType => async (dispatch) => {
    const posts = await fridayAPI.getPosts()
    dispatch(setPostsAC(posts))
}
export const updatePostTC = (postId: number, text: string): AppThunkType => async (dispatch) => {
    const result = await fridayAPI.updatePost(postId, text)
    dispatch(updatePostAC(postId, text))
}