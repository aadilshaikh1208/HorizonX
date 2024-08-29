import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import HomeSection from './Components/HomeSection/HomeSection';
import DiscoverSection from './Components/DiscoverSection/DiscoverSection';
function App() {
    return (
        <div className="App">
            <Navbar />
            <HeroSection/>
            <HomeSection/>
            <DiscoverSection />
            {/* Other components like pages will go here */}
        </div>
    );
}

export default App;
