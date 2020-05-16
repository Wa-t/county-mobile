import { createStore, combineReducers, applyMiddleware } from "redux";
import loggedUserReducer from "../reducer/loggedUserReducer";
import searchParamReuducer from '../reducer/searchParamReducer';
import hundredReducer from '../reducer/hundred'
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  loggedUserReducer,
  hundredReducer,
  searchParamReuducer
});

let middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(require("redux-logger").createLogger());
}
// const store = createStore(reducers);

const store = applyMiddleware(...middlewares)(createStore)(reducers);
// store.subscribe(() => {});

export default store;
