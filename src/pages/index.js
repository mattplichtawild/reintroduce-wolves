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
      <div className="bg-local" style={{ backgroundImage:`url(${wolfPackPicture})`}}>
        <h1 className="inline-block">Restore Colorado Ecology</h1>
        <h1>Restore the Wolves</h1>
      </div>
      <img
          alt="Wolves running through wilderness."
          className="bg-cover bg-center"
          src={wolfPackPicture}
      />
      <div className="px-6 md:px-20 lg:px-32 bg-tertiary bg-opacity-80">
        <section className="text-center py-6">
          <p className="text-sm md:leading-loose md:text-lg lg:text-xl font-sans mb-4">
            As Coloradans, we pride ourselves on the natural beauty of the state. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </div>
      <div className="px-6 md:px-20 lg:px-32">
      <section id="about" className="text-center py-6">
        <h2 className="inline-block py-3 mb-4 text-3xl font-bold">
          About Proposition 114
        </h2>

        <div className="grid gap-5 grid-cols-2 flex-auto md:text-2xl">
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
      </div>
      <div className="bg-white">
      <section id="proven-success" className="py-6 text-center">
        <h2 className="inline-block py-3 mb-4 text-3xl font-bold">Proven Success in Yellowstone</h2>
        <p className="md:text-lg px-6 md:px-20 lg:px-32">Paragraph that summarizes trophic cascade. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum at varius vel pharetra. Felis imperdiet proin fermentum leo. Purus gravida quis blandit turpis cursus in hac habitasse. Nec sagittis aliquam malesuada bibendum. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Ut sem viverra aliquet eget sit amet tellus. Lobortis scelerisque fermentum dui faucibus in. Morbi tincidunt ornare massa eget egestas purus.</p>

        <div className="flex flex-wrap text-sm lg:text-xl py-8">
          <div className="md:w-1/2 px-8">
            <h3 className="font-semibold lg:pb-4">A Natural Balance</h3>
            <p className="md:text-justify">Paragraph summarizing how wolves bring balance by keeping other species from overpopulating. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum at varius vel pharetra. Felis imperdiet proin fermentum leo. Purus gravida quis blandit turpis cursus in hac habitasse. Nec sagittis aliquam malesuada bibendum. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Ut sem viverra aliquet eget sit amet tellus. Lobortis scelerisque fermentum dui faucibus in. Morbi tincidunt ornare massa eget egestas purus.</p>
          </div>
          <div className="md:w-1/2">
            <img src={elkPicture}/>
          </div>
          <div className="md:w-1/2">
            <img src={riverYellowstone}/>
          </div>
          <div className="md:w-1/2 px-8">
            <h3 className="text-center font-semibold lg:pb-4">Benefit to Forests and Rivers</h3>
            <p className="md:text-justify">Summarize how trophic cascade trickles all the way down to helping restore rivers and vegetation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum at varius vel pharetra. Felis imperdiet proin fermentum leo. Purus gravida quis blandit turpis cursus in hac habitasse. Nec sagittis aliquam malesuada bibendum. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Ut sem viverra aliquet eget sit amet tellus. Lobortis scelerisque fermentum dui faucibus in. Morbi tincidunt ornare massa eget egestas purus.</p>
            <br/>
            <ul>Resources to use for this section:
              <li><a className="text-blue underline" href="https://www.yellowstonepark.com/things-to-do/wolf-reintroduction-changes-ecosystem" target="_blank" rel="noreferrer">Wolf Reintroduction Changes Ecosystem in Yellowstone</a></li>
              <li><a className="text-blue underline" href="https://www.yellowstonepark.com/news/yellowstone-is-wolf-country-once-again" target="_blank" rel="noreferrer">Changes Seen a Decade After Yellowstones Wolf Reintroduction</a></li>
              <li><a className="text-blue underline" href="https://www.yellowstonepark.com/things-to-do/wolves-bring-yellowstone-back" target="_blank" rel="noreferrer">Wolves Bring Aspen Trees Back</a></li>
            </ul>
            <p className="md:text-justify"></p>
          </div>
        </div>
      </section>
      </div>
      <div className="lg:px-32">
      <section id="facts" className="py-6">
        <div className="container flex flex-wrap mx-auto">
          <h2 className="w-full inline-block mb-4 text-3xl text-center font-bold">The Facts On Wolves</h2>
          <div className="w-1/2 md:w-1/3 flex flex-grow flex-shrink p-2 md:p-6">
            <div className="flex-1 bg-white rounded-t rounded-b shadow-lg p-6">
              <h4 className="font-semibold pb-1 text-lg">First Fact</h4>
              <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className="w-1/2 md:w-1/3 flex flex-grow flex-shrink p-2 md:p-6">
            <div className="flex-1 bg-white rounded-t rounded-b shadow-lg p-6">
              <h4 className="font-semibold pb-1 text-lg">Second Fact</h4>
              <p className="font-light">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className="w-1/2 md:w-1/3 flex flex-grow flex-shrink p-2 md:p-6">
            <div className="flex-1 bg-white rounded-t rounded-b shadow-lg p-6">
              <h4 className="font-semibold pb-1 text-lg">Third Fact</h4>
              <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>

          <div className="w-1/2 md:w-1/3 flex flex-grow flex-shrink p-2 md:p-6">
            <div className="flex-1 bg-white rounded-t rounded-b shadow-lg p-6">
              <h4 className="font-semibold pb-1 text-lg">Fourth Fact</h4>
              <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className="w-1/2 md:w-1/3 flex flex-grow flex-shrink p-2 md:p-6">
            <div className="flex-1 bg-white rounded-t rounded-b shadow-lg p-6">
              <h4 className="font-semibold pb-1 text-lg">Fifth Fact</h4>
              <p className="font-light"> Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className="w-1/2 md:w-1/3 flex flex-grow flex-shrink p-2 md:p-6">
            <div className="flex-1 bg-white rounded-t rounded-b shadow-lg p-6">
              <h4 className="font-semibold pb-1 text-lg">Sixth Fact</h4>
              <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>
      </div>
      <div className="xl:px-32 bg-blue-600">
      <section id="experts" className="py-6 text-gray-100">
        <h2 className="w-full inline-block mb-4 py-3 text-3xl text-center font-bold">Experts Support Reintroduction</h2>
        <div className="px-6 xl:px-32 text-justify pb-12">
          <p className="leading-loose md:tracking-widest md:text-xl">&quot;The Yellowstone wolf re-establishment project makes clear that we can humanely and cost-effectively translocate wolves from one area to another and successfully reintroduce them. It makes clear, as does decades of reliable research from around the world, that wolves are not a threat to human safety or the livestock and big game hunting industries. It makes clear that co-existing with wolves is a very straightforward affair that requires only a modicum of accommodation on our part.&quot;</p>
          <p className="text-right">Mike Phillips - Biologist, Executive Director of Turner Endangered Species Fund, Montana State Senator</p>
        </div>
        <div className="px-6 xl:px-32 text-justify pb-8">
          <p className="leading-loose md:tracking-widest md:text-xl">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam dignissim diam quis enim lobortis. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Fermentum leo vel orci porta non. Purus sit amet volutpat consequat mauris nunc congue nisi. Egestas tellus rutrum tellus pellentesque eu tincidunt. Purus in mollis nunc sed id semper risus in. Eget velit aliquet sagittis id consectetur purus ut. Egestas maecenas pharetra convallis posuere morbi leo. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Nunc mattis enim ut tellus elementum sagittis vitae et leo.&quot;</p>
          <p className="text-right">That One Guy - Wildlife Expert</p>
        </div>
      </section>
      </div>
      <div className="px-6 lg:px-32">
      <section id="opposition" className="text-center py-6">
        <h2 className="w-full inline-block mb-4 py-3 text-3xl text-center font-bold">The Opposition</h2>
        {/* attack the opposing organization here */}
        <div className="md:text-2xl text-justify xl:px-32">
          <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam dignissim diam quis enim lobortis. Sed risus pretium quam vulputate dignissim suspendisse in est ante. </p>
          <p className="py-4">Fermentum leo vel orci porta non. Purus sit amet volutpat consequat mauris nunc congue nisi. Egestas tellus rutrum tellus pellentesque eu tincidunt. Purus in mollis nunc sed id semper risus in. Eget velit aliquet sagittis id consectetur purus ut. Egestas maecenas pharetra convallis posuere morbi leo. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum.</p>
          <p className="py-4">Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Nunc mattis enim ut tellus elementum sagittis vitae et leo.</p>
          <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Nunc sed blandit libero volutpat sed cras ornare arcu dui.</p>
        </div>
      </section>
      </div>
      <div className="w-full bg-gray-300 p-12">
      <section className="w-full inline block mb-4 text-3xl xl:text-5xl text-center font-bold">
        <h2 className="py-4">Support Colorado&lsquo;s Ecology</h2>
        <p className="py-4">Support Wolf Reintroduction</p>
        <p className="py-4 text-6xl">Vote <span className="text-secondary border-4 border-secondary px-2">YES</span> on Proposition 114</p>
      </section>
      </div>
    </Layout>
  );
}

export default IndexPage;
