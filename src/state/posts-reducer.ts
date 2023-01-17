// state
import {AppThunkType} from "./store";
import {fridayAPI, PostAPIType} from '../api/api';
import {mapToLookupTable} from '../common/utils/mapToLookupTable';

const initialState: PostsInitialStateType = {
    // posts: [] as PostsType[],
    allIds: [] as number[],
    byId: {} as { [key: string]: PostType }
}

export type PostsInitialStateType = {
    // posts: PostsType[]
    allIds: number[]
    byId: {}
}

export type PostType = {
    id: number
    // author: AuthorType
    authorId: number
    text: string
    likes: number
}



// reducer
export const postsReducer = (state: PostsInitialStateType = initialState,
                             action: PostsActionsTypes): PostsInitialStateType => {
    switch (action.type) {
        case 'POSTS/GET_POSTS': {
            // return {...state, posts: action.payload.posts};
            return {...state,
                allIds: action.payload.posts.map(p => p.id),
                byId: mapToLookupTable(action.payload.posts.map(p => {
                    const copy: PostType = {
                        id: p.id,
                        authorId: p.author.id,
                        text: p.text,
                        likes: p.likes
                    }
                    return copy
                }))
            }
        }
        case 'POSTS/UPDATE_POST': {
            // return {
            //     ...state,
            //     posts: state.posts.map(p => p.id === action.payload.postId ? {...p, text: action.payload.text} : p)}
            return {
                ...state,
                byId: {
                    ...state.byId,
                    // @ts-ignore
                    [action.payload.postId]: {...state.byId[action.payload.postId], text: action.payload.text}
                }
            }
        }
        default:
            return state;
    }
}

// actions
export type PostsActionsTypes = GetPostsACType | UpdatePostACType;

export type GetPostsACType = ReturnType<typeof getPostsAC>
export const getPostsAC = (posts: PostAPIType[]) => ({
    type: 'POSTS/GET_POSTS', payload: {posts}
} as const)

export type UpdatePostACType = ReturnType<typeof updatePostAC>
export const updatePostAC = (postId: number, text: string) => ({
    type: 'POSTS/UPDATE_POST', payload: {postId, text}
} as const)

// thunks
export const getPostsTC = (): AppThunkType => async (dispatch) => {
    const posts = await fridayAPI.getPosts()
    dispatch(getPostsAC(posts))
}
export const updatePostTC = (postId: number, text: string): AppThunkType => async (dispatch) => {
    const result = await fridayAPI.updatePost(postId, text)
    dispatch(updatePostAC(postId, text))
}