import { useSelector } from 'react-redux';
import {
  selectUsers,
  selectFollowingsUsersList,
  selectError,
  selectIsLoading,
  selectVisibleUsers,
} from 'redux/selectors';

export const useUsers = () => {
  const users = useSelector(selectUsers);
  const followingsUsersList = useSelector(selectFollowingsUsersList);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleUsers = useSelector(selectVisibleUsers);

  return {
    users,
    followingsUsersList,
    isLoading,
    error,
    visibleUsers,
  };
};
