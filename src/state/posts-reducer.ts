const initialState: PostsInitialStateType = {
    id: 'some value'
}

export type PostsInitialStateType = {
    id: string
}

export type ProfileActionTypes = NewCaseACType;

export const postsReducer = (state: PostsInitialStateType = initialState, action: ProfileActionTypes): PostsInitialStateType => {
    switch(action.type) {
        case 'NEW_CASE': {
            return {...state};
        }
        default:
            return state;
    }
}

export type NewCaseACType = ReturnType<typeof newCaseAC>
export const newCaseAC = () => ({
    type: 'NEW_CASE'
} as const)