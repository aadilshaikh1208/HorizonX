import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import HomeSection from './Components/HomeSection/HomeSection';
import DiscoverSection from './Components/DiscoverSection/DiscoverSection';
import TrendsSection from './Components/TrendSection/TrendSection';
import LoanSection from './Components/LoanSection/LoanSection';
function App() {
    return (
        <div className="App">
            <Navbar />
            <HeroSection/>
            <HomeSection/>
            <DiscoverSection />
            <TrendsSection />
            <LoanSection />
            {/* Other components like pages will go here */}
        </div>
    );
}

export default App;
