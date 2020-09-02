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
        <h2 className="inline-block py-3 mb-4 text-3xl font-bold">
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

      <section className="py-6">
        <div className="container flex flex-wrap mx-auto">
          <h2 className="w-full inline-block mb-4 text-3xl text-center font-bold">The Facts On Wolves</h2>
          <div className="w-1/3 flex flex-grow flex-shrink p-6">
            <div className="flex-1 bg-white rounded-t rounded-b shadow p-6">
              <h4 className="font-semibold pb-1 text-lg">First Fact</h4>
              <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className="w-1/3 flex flex-grow flex-shrink p-6">
            <div className="flex-1 bg-white rounded-t rounded-b shadow p-6">
              <h4 className="font-semibold pb-1 text-lg">Second Fact</h4>
              <p className="font-light">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className="w-1/3 flex flex-grow flex-shrink p-6">
            <div className="flex-1 bg-white rounded-t rounded-b shadow p-6">
              <h4 className="font-semibold pb-1 text-lg">Third Fact</h4>
              <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>

          <div className="w-1/3 flex flex-grow flex-shrink p-6">
            <div className="flex-1 bg-white rounded-t rounded-b shadow p-6">
              <h4 className="font-semibold pb-1 text-lg">Fourth Fact</h4>
              <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className="w-1/3 flex flex-grow flex-shrink p-6">
            <div className="flex-1 bg-white rounded-t rounded-b shadow p-6">
              <h4 className="font-semibold pb-1 text-lg">Fifth Fact</h4>
              <p className="font-light"> Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className="w-1/3 flex flex-grow flex-shrink p-6">
            <div className="flex-1 bg-white rounded-t rounded-b shadow p-6">
              <h4 className="font-semibold pb-1 text-lg">Sixth Fact</h4>
              <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        {/* Section with quotes from experts who support reintroduction */}
        <h2 className="w-full inline-block mb-4 py-3 text-3xl text-center font-bold">Experts Support Reintroduction</h2>
        <p className="leading-loose tracking-widest text-xl pr-32">&quot;The Yellowstone wolf re-establishment project makes clear that we can humanely and cost-effectively translocate wolves from one area to another and successfully reintroduce them. It makes clear, as does decades of reliable research from around the world, that wolves are not a threat to human safety or the livestock and big game hunting industries. It makes clear that co-existing with wolves is a very straightforward affair that requires only a modicum of accommodation on our part.&quot;</p>
        <p>Mike Phillips - Biologist, Executive Director of Turner Endangered Species Fund, Montana State Senator</p>
      </section>

      <section className="text-center py-6">
        <h2 className="w-full inline-block mb-4 py-3 text-3xl text-center font-bold">The Opposition</h2>
        {/* attack the opposing organization here */}
      </section>
      </div>
    </Layout>
  );
}

export default IndexPage;
