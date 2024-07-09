import React from 'react';
import Layout from './layout';
import Footer from './footer';
import Header from './header';
import Listings_details from './listings_details';

const Page = () => {
  return (
    <main className="">
      <Header />
      <Layout />
      <Listings_details />
      <Footer />
    </main>
  );
};

export default Page;