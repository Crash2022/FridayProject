import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ProfileActionTypes, postsReducer} from "./posts-reducer";

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
    posts: postsReducer
})

// @ts-ignore
export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// типизация state
export type AppRootStateType = ReturnType<typeof rootReducer>;
// export type AppRootStateType = ReturnType<typeof store.getState>; // другая запись типизации

// типизация Dispatch и Selector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionType>;
// export type AppDispatch = typeof store.dispatch; // другая запись типизации (из доки), работает не всегда

// типизация всех экшенов
export type AppActionType = ProfileActionTypes;

// типизация Thunk
// надо вставить новые
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>

// @ts-ignore
window.store = store;