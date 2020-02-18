export const getFilteredUsers = (users, text) => {
  const usersSearch = text.toLowerCase();

  return users.filter(user => user.name.toLowerCase().includes(usersSearch));
};
