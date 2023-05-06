import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">
        <div>Home</div>
      </NavLink>
      <NavLink  to="/contacts">
        <div>Contacts</div>
      </NavLink>
    </nav>
  );
};
