import type { FC } from 'react';
import React from 'react';
import Header from '~/components/layouts/header';
import Footer from '~/components/layouts/footer';

interface IMainLayout {
  children: React.ReactNode;
}
const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default React.memo(MainLayout);
