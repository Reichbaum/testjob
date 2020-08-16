import {applyMiddleware, combineReducers, createStore} from 'redux'
import repoReducer, {rootReposSaga} from './RepoReducer'
import createSagaMiddleware from 'redux-saga'

const rootReducer = combineReducers({
    repos: repoReducer
  }
)


const sagaMiddleware = createSagaMiddleware()
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootReposSaga)

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
export type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

export default store