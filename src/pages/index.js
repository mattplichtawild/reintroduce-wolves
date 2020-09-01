import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import wolfPackPicture from "../images/two-wolves.png";
import elkPicture from "../images/elk-yellowstone.png";
import riverYellowstone from "../images/river-yellowstone.png";

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
      <div className="bg-white">
      <section className="text-center py-6">
        <h2 className="inline-block py-3 mb-4 text-3xl font-bold">Proven Success in Yellowstone</h2>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum at varius vel pharetra. Felis imperdiet proin fermentum leo. Purus gravida quis blandit turpis cursus in hac habitasse. Nec sagittis aliquam malesuada bibendum. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Ut sem viverra aliquet eget sit amet tellus. Lobortis scelerisque fermentum dui faucibus in. Morbi tincidunt ornare massa eget egestas purus.</p>

        <div className="flex flex-wrap text-xl text-justify py-8">
          <div className="w-1/2 px-8">
            <h3 className="text-center font-semibold py-4">Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum at varius vel pharetra. Felis imperdiet proin fermentum leo. Purus gravida quis blandit turpis cursus in hac habitasse. Nec sagittis aliquam malesuada bibendum. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Ut sem viverra aliquet eget sit amet tellus. Lobortis scelerisque fermentum dui faucibus in. Morbi tincidunt ornare massa eget egestas purus.</p>
          </div>
          <div className="w-1/2">
            <img src={elkPicture}/>
          </div>
          <div className="w-1/2">
            <img src={riverYellowstone}/>
          </div>
          <div className="w-1/2 px-8">
            <h3 className="text-center font-semibold py-4">Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum at varius vel pharetra. Felis imperdiet proin fermentum leo. Purus gravida quis blandit turpis cursus in hac habitasse. Nec sagittis aliquam malesuada bibendum. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Ut sem viverra aliquet eget sit amet tellus. Lobortis scelerisque fermentum dui faucibus in. Morbi tincidunt ornare massa eget egestas purus.</p>
          </div>
        </div>
      </section>
      </div>
      <section className="text-center">
        {/* section with text cards, each will have fact with link to further info*/}
        {/* Have at least 3 text cards, do 6 if possible */}
        <h2 className="inline-block mb-4 text-3xl font-bold">The facts of wolf reintroduction</h2>
        <div className="w-1/3 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white">
            <p>First Card</p>
            <h4>First Fact</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
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
