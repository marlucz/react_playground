export const getFilteredUsers = (users, text) => {
  const usersSearch = text.toLowerCase();

  return users.filter(user => {
    const { first, last } = user.name;

    return (
      first.toLowerCase().includes(usersSearch) ||
      last.toLowerCase().includes(usersSearch)
    );
  });
};
