export const usersFetched = users => ({
  type: "FETCH_USERS_SUCCESS",
  users
});

export const searchUsers = text => ({
  type: "SEARCH_USERS",
  text
});
