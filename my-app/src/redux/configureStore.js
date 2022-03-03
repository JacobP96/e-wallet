import { createStore, combineReducers } from "redux";
import UserCardReducer from "./ducks/UserCards";
import IconCardReducer from "./ducks/IconsToCards";

const reducer = combineReducers({
  UserCard: UserCardReducer,
  IconCard: IconCardReducer,
});

const store = createStore(reducer);

export default store;
