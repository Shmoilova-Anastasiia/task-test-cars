import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import css from './Layout.module.css';
import { Header } from 'components/Header/Header';

export const Layout = () => {
  return (
    <div className={css.container}>
      <Header/>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};