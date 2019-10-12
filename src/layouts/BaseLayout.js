import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BaseLayout = ({ children }) => (
  <>
    <Header />
    <main className="main py-4">
      <div className="container">
        {children}
      </div>
    </main>
    <Footer />
  </>
);

export default BaseLayout;
