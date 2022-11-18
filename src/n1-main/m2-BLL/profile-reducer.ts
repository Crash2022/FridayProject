const initialState: ProfileInitialStateType = {
    id: 'some value'
}

export type ProfileInitialStateType = {
    id: string
}

export type ProfileActionTypes = NewCaseACType;

export const profileReducer = (state: ProfileInitialStateType = initialState, action: ProfileActionTypes): ProfileInitialStateType => {
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