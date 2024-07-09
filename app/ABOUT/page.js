import React from 'react';
import Layout from './layout';
import Footer from './footer';
import Header from './header';
import About from './about';

const Page = () => {
  return (
    <main className="">
      <Header />
      <Layout />
      <About />
      <Footer />
    </main>
  );
};

export default Page;