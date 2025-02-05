import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1 className='text-3xl'>Dashboard</h1>
      {children}
    </div>
  );
};

export default Layout;
