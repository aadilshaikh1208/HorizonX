import React, { useState } from 'react';
import './DiscoverSection.css';
import svg1 from '../../assets/spot-agent.svg';
import svg2 from '../../assets/spot-cash.svg';
import svg3 from '../../assets/spot-calculator.svg';
import svg4 from '../../assets/spot-money.svg';

const DiscoverSection = () => {
  const [activeButton, setActiveButton] = useState('buying'); // Initialize with an empty string
  const [showGrid, setShowGrid] = useState(true);

  const handleButtonClick = (button) => {
    setActiveButton(button); // Set the clicked button as active
  };

  return (
    <div className="discover-container">
      <h2 className="h2-title">Discover how we can help</h2>
      <div className="button-container">
        <button
          className={`buying-button ${activeButton === 'buying' ? 'active' : ''}`}
          onClick={() => handleButtonClick('buying')}
        >
          Buying
        </button>
        <button
          className={`renting-button ${activeButton === 'renting' ? 'active' : ''}`}
          onClick={() => handleButtonClick('renting')}
        >
          Renting
        </button>
        <button
          className={`selling-button ${activeButton === 'selling' ? 'active' : ''}`}
          onClick={() => handleButtonClick('selling')}
        >
          Selling
        </button>
      </div>
      {showGrid && (
        <div className="grid-container">
          <div className="grid-item">
            <h4 className="grid-title">Get professional help in your home search</h4>
            <img src={svg1} alt="Get professional help" />
            <p className="grid-paragraph">
              We'll connect you with a local agent who can explore neighborhoods, find a home
              that fits your needs, and stay on budget.
            </p>
            <a href="/professional-help" className="grid-link">Connect with an agent</a>
          </div>
          <div className="grid-item">
            <h4 className="grid-title">Find out how much you can afford</h4>
            <img src={svg2} alt="Find out how much you can afford" />
            <p className="grid-paragraph">
              We'll help you estimate your budget range. Set up your buyer profile to assist in your search.
            </p>
            <a href="/affordability" className="grid-link">Try our affordability calculator</a>
          </div>
          <div className="grid-item">
            <h4 className="grid-title">Understand your monthly cost</h4>
            <img src={svg3} alt="Understand your monthly cost" />
            <p className="grid-paragraph">
              Get an in-depth look at your monthly and closing costs.
            </p>
            <a href="/monthly-costs" className="grid-link">Try our mortgrage calculator</a>
          </div>
          <div className="grid-item">
            <h4 className="grid-title">Get help with your down payment</h4>
            <img src={svg4} alt="Get help with your down payment" />
            <p className="grid-paragraph">
              You may be able to buy a home with just 3.5% down.
            </p>
            <a href="/down-payment" className="grid-link">Find down payment help</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscoverSection;
