import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import css from './AuthNav.module.css'


export const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <div></div>
      ) : (
        <div>
          <NavLink className={css.link} to="/register">
            <div className={css.item}>Register</div>
          </NavLink>

          <NavLink className={css.link} to="/login">
            <div className={css.item}>Log In</div>
          </NavLink>
        </div>
      )}
    </div>
  );
};
