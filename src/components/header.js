import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
// import RestoreWolvesLogo from "../images/RestoreWolvesLogo.png";

// Where is this all being pulled from? 

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-primary">
      <div className="flex flex-wrap items-center justify-between max-w-6xl p-8 mx-auto">
        <Link to="/">
          {/* <img className="object-scale-down" src={RestoreWolvesLogo} alt="logo" /> */}
          <h1 className="flex items-center text-white no-underline">
            <span className="uppercase text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>

        <button
          className="items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/#about`,
              title: `About`,
            },
            {
              route: `/#proven-success`,
              title: `A Proven Success`,
            },
            {
              route: '/#facts',
              title: 'The Facts',
            },
            {
              route: '/#experts',
              title: 'Experts on 114',
            },
            {
              route: '/#opposition',
              title: 'The Opposition',
            }
          ].map((link) => (
            <Link
              className="block mt-4 text-white font-light tracking-wide no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
