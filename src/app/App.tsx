import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppRouter } from './providers/router';

import { getInitStatus, UserActions } from '@/entities/User';
import { PageLoader } from '@/features/PageLoader';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Sidebar } from '@/widgets/SIdebar';
import { Navbar } from '@/widgets/navbar';

const App = () => {
  const dispatch = useDispatch();

  const inited = useSelector(getInitStatus);
  useEffect(() => {
    dispatch(UserActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {})}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />

        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
