import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectIsLoggedIn } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/auth-operations';
import css from './UserMenu.module.css'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <div className={css.wrapp}>
          <p className={css.user}>Welcome, {user.name}!</p>
          <button
            className={css.logOutBtn}
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
