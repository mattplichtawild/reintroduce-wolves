import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

// Ugh I'm so tired, how is this working?

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="flex-1 w-full mx-auto">
        {children}
      </main>

      <footer className="bg-primary">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <div className="border border-white rounded-sm p-1">
          <p className="text-white">Paid for and created by Matt Plichta</p>
          </div>
          <p>
            <a
              className="font-bold text-white no-underline"
              href="mailto:mattplichtawild@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
