import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

type PageLayoutProps = { children: React.ReactNode };

const PageLayout = ({ children }: PageLayoutProps): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Successible</title>
        <meta
          name="description"
          content="Customisable skills assessments that are accessible for all"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="p-4 max-w-4xl flex-col justify-center mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
