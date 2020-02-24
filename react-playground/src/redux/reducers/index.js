import { combineReducers } from "redux";

import { users } from "./users";
import { usersSearch } from "./usersSearch";
import { seed } from "./seed";

export default combineReducers({
  users,
  usersSearch,
  seed
});
