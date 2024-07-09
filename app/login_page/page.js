import React from 'react';
import Layout from './layout';
import Footer from './footer';
import Header from './header';
import Component from './component';

const Page = () => {
  return (
    <main className="">
      <Header />
      <Layout />
      <Component />
      <Footer />
    </main>
  );
};

export default Page;