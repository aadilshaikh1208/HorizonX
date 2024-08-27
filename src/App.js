import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';

function App() {
    return (
        <div className="App">
            <Navbar />
            <HeroSection/>
            {/* Other components like pages will go here */}
        </div>
    );
}

export default App;
