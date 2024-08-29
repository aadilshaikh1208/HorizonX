import React from 'react';
import './HomeSection.css';
import pic1 from '../../assets/pic-1.png';
import pic2 from '../../assets/pic-2.png';
import pic3 from '../../assets/pic-3.png';
import pic4 from '../../assets/pic-4.png';
import pic5 from '../../assets/pic-5.png';
import pic6 from '../../assets/pic-6.png';
import pic7 from '../../assets/pic-7.png';
import pic8 from '../../assets/pic-8.png';

const HomeSection = () => {
  const houses = [
    { id: 1, title: 'New Listings', imgSrc: pic1, available: 1078 },
    { id: 2, title: 'House 2', imgSrc: pic2, available: 1566 },
    { id: 3, title: 'House 3', imgSrc: pic3, available: 192 },
    { id: 4, title: 'House 4', imgSrc: pic4, available: 5757 },
    { id: 5, title: 'House 5', imgSrc: pic5, available: 884 },
    { id: 6, title: 'House 6', imgSrc: pic6, available: 23 },
    { id: 7, title: 'House 7', imgSrc: pic7, available: 747 },
    { id: 8, title: 'House 8', imgSrc: pic8, available: 2 },
  ];

  return (
    <div className="home-section-container">
      <h3 className="section-title">Browse homes in Atlanta, GA</h3>
      <div className="home-section-grid">
        {houses.map((house) => (
          <div key={house.id} className="house-block">
            <img src={house.imgSrc} alt={house.title} className="house-img" />
            <h3 className="house-title">{house.title}</h3>
            <div className="house-available">{house.available}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
