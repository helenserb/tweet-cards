import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectIsLoggedIn } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {user}</p>
          <button
            type="button"
            onClick={() => dispatch(logOut())}
          >
            Logout
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
