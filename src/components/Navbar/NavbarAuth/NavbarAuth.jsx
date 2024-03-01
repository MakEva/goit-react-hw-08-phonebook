import css from './navbar-auth.module.css';
import { NavLink } from 'react-router-dom';

const NavbarAuth = () => {
  return (
    <div className={css.nav_auth}>
      <NavLink to="/register" className={css.link}>
        Sign Up
      </NavLink>
      |
      <NavLink to="/login" className={css.link}>
        Login
      </NavLink>
    </div>
  );
};
export default NavbarAuth;
