import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

type PageLayoutProps = { children: React.ReactNode };

const PageLayout = ({ children }: PageLayoutProps): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Successible</title>
        <meta
          name="description"
          content="Customisable skills assessments that are accessible for all"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
