import { createStore, combineReducers } from "redux";
import UserCardReducer from "./ducks/UserCards";

const reducer = combineReducers({
  UserCard: UserCardReducer,
});

const store = createStore(reducer);

export default store;
