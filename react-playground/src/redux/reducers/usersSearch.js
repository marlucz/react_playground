export const usersSearch = (state = "", action) => {
  switch (action.type) {
    case "SEARCH_USERS":
      return action.text;
    default:
      return state;
  }
};
