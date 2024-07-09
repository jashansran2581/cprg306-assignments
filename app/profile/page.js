import React from 'react';
import Layout from './layout';
import Footer from './footer';
import Header from './header';
import Profile from './profile';

const Page = () => {
  return (
    <main className="">
      <Header />
      <Layout />
      <Profile />
      <Footer />
    </main>
  );
};

export default Page;