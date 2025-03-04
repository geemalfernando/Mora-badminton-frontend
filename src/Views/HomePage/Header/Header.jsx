import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import HeaderPage from "../../HeaderPage/HeaderPage";
import image from "../../../assests/images/gallery/1.jpg"
import image2 from "../../../assests/images/gallery/2.jpg"
import image3 from "../../../assests/images/gallery/3.jpg";
import image4 from "../../../assests/images/gallery/4.jpg"

// Import your background images (replace with your actual image paths)
const backgroundImages = [
  
  image,
  image2,
  image3,
  image4
  
  
];

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Automatically cycle through background images every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.homeContainer}>
      {/* Animated Background Slides */}
      <div className={styles.backgroundSlider}>
        {backgroundImages.map((image, index) => (
          <div 
            key={index}
            className={`${styles.backgroundSlide} ${
              index === currentImageIndex ? styles.active : ''
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <div className={styles.headerDiv}>
        <HeaderPage />
        <div className={styles.UMiSFContainer}>
          <h1>UMiSF</h1>
          <p>
            University of Moratuwa<br/>
            International Shuttlers' Fest
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;