// import React from 'react'
import AppBanner from './components/AppBanner/AppBanner';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import WhereToBuy from './components/WhereToBuy/WhereToBuy';


const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
     
    </div>
  );
};

export default App;
