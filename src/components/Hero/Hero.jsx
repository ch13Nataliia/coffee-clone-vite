// import React from 'react'
import BgImage from '../../assets/bg-slate.png';

import BlackCoffee from "../../assets/black.png"

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};



const Hero = () => {
  return (
    <main style={bgImage}>
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* Navbar section */}
          {/* Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28 ">
              <h1 className="text-7xl font-bold leading-tight ml-14">
                Blvck Tumber
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h2 className="text-2xl"> Black Lifestyle Lovers,</h2>
                  <h2 className="text-sm opacity-55 leading-loose">
                    {' '}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eos aut a veritatis numquam odit officia harum, velit
                    accusamus culpa ex qui saepe dolorem officiis omnis dolore
                    ad! Eum, iure vel.
                  </h2>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </div>
            </div>

            {/* Hero Image section */}
            <div className='relative'>
              <img src={BlackCoffee} alt="" className='relative z-40 h-[400px] md:h-[700px] img-shadow'/>
            </div>
            <div></div>
            {/* third div section */}
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
