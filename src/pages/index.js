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
      
      <section className="text-center px-8 py-6">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold">
          Restore Colorado to its natural beauty.
        </h2>

        <p className="leading-loose md:text-lg lg:text-xl font-sans mb-4">
          As Coloradans, we pride ourselves on the natural beauty of the state. 
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section className="text-center px-8 py-6">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold">
          Section with bullet points about Prop 114
        </h2>

        <div className="grid gap-5 grid-cols-2 flex-auto text-xl">
          <ul className="list-none">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
          </ul>
          <ul className="list-none">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
          </ul>
        </div>
      </section>
      <section className="text-center">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold">Proven Success in Yellowstone</h2>

        <div className="grid grid-cols-2 text-lg">
          <p>This will be a paragraph</p>
          <p>This could be a picture of a map or something</p>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
