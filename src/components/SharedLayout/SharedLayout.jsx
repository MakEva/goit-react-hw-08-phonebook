import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import { Loader } from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
