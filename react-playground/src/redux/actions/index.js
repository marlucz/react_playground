export const usersFetched = users => ({
  type: "FETCH_USERS_SUCCESS",
  users
});

export const searchUsers = text => ({
  type: "SEARCH_USERS",
  text
});

export const changeSeed = seed => ({
  type: "CHANGE_SEED",
  seed
});

export const changeSeedAndFetch = seed => dispatch => {
  dispatch(changeSeed(seed));
  dispatch(fetchUsers());
};

export const fetchUsers = () => (dispatch, getState) => {
  fetch(
    "https://randomuser.me/api/?format=json&results=10&seed=" +
      encodeURIComponent(getState().seed)
  )
    .then(res => res.json())
    .then(json => dispatch(usersFetched(json.results)));
};
