import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';


export const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <span role="img" aria-label="Greeting icon">
            📞
          </span>
        </div>
      ) : (
        <div>
          <NavLink to="/register">
            <div >Register</div>
          </NavLink>

          <NavLink  to="/login">
            <div >Log In</div>
          </NavLink>
        </div>
      )}
    </div>
  );
};
