import { combineReducers } from "redux";

import { users } from "./users";
import { usersSearch } from "./usersSearch";

export default combineReducers({
  users,
  usersSearch
});
