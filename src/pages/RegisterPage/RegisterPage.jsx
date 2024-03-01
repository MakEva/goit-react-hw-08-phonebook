import RegisterForm from '../../components/RegisterForm/RegisterForm';
import css from './register-page.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';
import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-selector';
import { Loader } from 'components/Loader/Loader';

const RegisterPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <main>
      <h1 className={css.title}>Please sign up</h1>
      {authLoading && <Loader />}
      <RegisterForm onSubmit={handleSignup} />
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </main>
  );
};
export default RegisterPage;
