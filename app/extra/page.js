import React from 'react';
import Layout from './layout';
import Footer from './footer';
import Header from './header';
import Listings from './listings';

const Page = () => {
  return (
    <main className="">
      <Header />
      <Layout />
      <Listings />
      <Footer />
    </main>
  );
};

export default Page;