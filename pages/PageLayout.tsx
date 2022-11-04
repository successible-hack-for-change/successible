import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import TestHeader from '../components/testHeader';

type PageLayoutProps = { testInProgress?: boolean; children: React.ReactNode };

const PageLayout = ({
  testInProgress,
  children,
}: PageLayoutProps): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Successible</title>
        <meta
          name="description"
          content="Skills assessments that are accessible for all"
        />
        <link rel="icon" href="/successible-logo.svg" />
      </Head>
      {testInProgress ? <TestHeader /> : <Header />}
      <main className="bg-white">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
