import { BallTriangle } from 'react-loader-spinner';
import css from './loader.module.css';

export const Loader = () => (
  <div className={css.loader}>
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>
);
