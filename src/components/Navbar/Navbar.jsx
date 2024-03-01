import css from './navbar.module.css';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarUser from './NavbarUser/NavbarUser';
import { useSelector } from 'react-redux';

import { selectIsLogin } from '../../redux/auth/auth-selector';

const Navbar = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <navbar className={css.block}>
      <NavbarMenu />
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </navbar>
  );
};
export default Navbar;
