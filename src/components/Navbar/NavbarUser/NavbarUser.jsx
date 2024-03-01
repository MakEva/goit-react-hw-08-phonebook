import css from './navbar-user.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../../redux/auth/auth-selector';
import { logout } from '../../../redux/auth/auth-operations';

const NavbarUser = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div className={css.block}>
      <p>{email}</p>
      <button onClick={onLogout} className={css.btn}>
        Logout
      </button>
    </div>
  );
};
export default NavbarUser;
