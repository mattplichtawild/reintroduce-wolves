import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import wolfPackPicture from "../images/two-wolves.png";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`wolf`, `reintroduction`, `Colorado`, `prop`, `114`]}
        title="Home"
      />
      {/* <div className="bg-cover bg-center" style={{backgroundImage: `url(${wolfPackPicture})`}}></div> */}
      <img
          alt="Wolves running through wilderness."
          className="bg-cover bg-center"
          src={wolfPackPicture}
      />
      <div className="px-32">
      <section className="text-center py-6">
        <p className="leading-loose md:text-lg lg:text-xl font-sans mb-4">
          As Coloradans, we pride ourselves on the natural beauty of the state. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section className="text-center py-6">
        <h2 className="inline-block py-3 mb-4 text-2xl font-bold">
          About Proposition 114
        </h2>

        <div className="grid gap-5 grid-cols-2 flex-auto text-2xl">
          <ul className="list grid gap-8">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
          </ul>
          <ul className="list grid gap-8">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
          </ul>
        </div>
      </section>
      
      <section className="text-center py-6">
        <h2 className="inline-block py-3 mb-4 text-3xl font-bold">Proven Success in Yellowstone</h2>

        <div className="flex flex-wrap">
          <div className="w-1/2 sm:w">
          <p>This will be a paragraph</p>
          </div>
          <div className="w-1/2">
          <p>Here will be a picture</p>

          </div>
          <div>
          <p>This will be a paragraph</p>

          </div>
        </div>
      </section>
      
      <section className="text-center">
        {/* section with text cards, each will have fact with link to further info*/}
        {/* Have at least 3 text cards, do 6 if possible */}
        <h2 className="inline-block mb-4 text-3xl font-bold">The facts of wolf reintroduction</h2>
        <div>

        </div>
      </section>

      <section className="text-center">
        {/* Section with quotes from experts who support reintroduction */}

      </section>

      <section className="text-center">
        {/* List of organizations that support reintroduction? */}
      </section>
      </div>
    </Layout>
  );
}

export default IndexPage;
