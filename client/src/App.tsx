import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';

export const App: FC = () => {
  return (
    <div className="h-full">
      <Navbar />
      <Outlet />
    </div>
  );
};
