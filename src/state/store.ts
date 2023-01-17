import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {PostsActionsTypes, postsReducer} from "./posts-reducer";
import {authorsReducer} from './authors-reducer';

// для React Redux DevTools Chrome
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// для React Redux DevTools Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// добавляем composeEnhancers() для React Redux DevTools Chrome
// export const store = createStore(rootReducer, composeEnhancers());


const rootReducer = combineReducers({
    posts: postsReducer,
    authors: authorsReducer
})

// @ts-ignore
export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// типизация state
export type AppRootStateType = ReturnType<typeof rootReducer>;

// типизация Dispatch
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>;

// типизация Thunk
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

// типизация всех экшенов
export type AppActionsType = PostsActionsTypes;

// @ts-ignore
window.store = store;