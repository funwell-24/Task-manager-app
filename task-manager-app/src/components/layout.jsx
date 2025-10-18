import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;