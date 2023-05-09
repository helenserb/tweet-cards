export const filterUsers = (filter, currentUsers) => {
  switch (filter) {
    case 'follow':
      return currentUsers.filter(user => !user.isFollowing);
    case 'followings':
      return currentUsers.filter(user => user.isFollowing);
    default:
      return currentUsers;
  }
};
