const asyncReducerFactory = name => {
  return (state = [], action) => {
    switch (action.type) {
      case `FETCH_${name}_SUCCESS`:
        return [...action.users];
      default:
        return state;
    }
  };
};

export const users = asyncReducerFactory("USERS");
