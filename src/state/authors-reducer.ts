// state
import {AuthorAPIType, fridayAPI, PostAPIType} from '../api/api';
import {mapToLookupTable} from '../common/utils/mapToLookupTable';

const initialState = {
    // allIds: [] as number[],
    byId: {} as { [key: string]: AuthorAPIType }
}

// type AuthorsInitialStateType = {
//     // allIds: number[]
//     byId: {}
// }
type AuthorsInitialStateType = typeof initialState

// reducer
export const authorsReducer = (state = initialState,
                             action: any): AuthorsInitialStateType => {
    switch (action.type) {
        case 'POSTS/GET_POSTS': {
            return {...state,
                // allIds: action.payload.posts.map((p: PostAPIType) => p.author.id),
                byId: mapToLookupTable(action.payload.posts.map((p: PostAPIType) => p.author))
            }
        }
        default:
            return state;
    }
}
