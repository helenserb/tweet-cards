import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'

export const Navigation = () => {
  return (
    <nav>
      <NavLink className={css.link} to="/">
        <p className={css.item}>Home</p>
      </NavLink>
      <NavLink className={css.link} to="/contacts">
        <p className={css.item}>Contacts</p>
      </NavLink>
    </nav>
  );
};
