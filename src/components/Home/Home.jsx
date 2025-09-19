import React, { useState, useEffect, useRef } from 'react';
import './home.scss';

const images = [
  '/Home 1.jpeg',
  '/Home 2.jpeg',
  '/Home 3.jpeg',
  '/Home 4.jpeg',
  '/Home 5.jpeg',
  '/Home 6.jpeg',
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(null); // index of next image
  const [isSliding, setIsSliding] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      handleSlide((current + 1) % images.length);
    }, 30000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const handleSlide = (nextIndex) => {
    setNext(nextIndex);
    setIsSliding(true);
    setTimeout(() => {
      setCurrent(nextIndex);
      setIsSliding(false);
      setNext(null);
    }, 1000); // match CSS duration
  };

  const nextImage = () => handleSlide((current + 1) % images.length);
  const prevImage = () => handleSlide((current - 1 + images.length) % images.length);

  return (
    <section className="home">
      <div className="home__container">
        <div className="home__info">
          <h1 className="home__title">Mrs Jane Nyabera</h1>
          <h2 className="home__subtitle">Bachelor in  Education Science</h2>
          <p className="home__expertise">
            Specialist in Mathematics, Physics, and Chemistry in<br />
            the department of Science
          </p>
          <a href="/about" className="home__button">Explore more</a>
        </div>
        <div className="home__image-wrapper">
          <button className="home__slider-btn left" onClick={prevImage} aria-label="Previous image">&#60;</button>
          <div className={`home__slider${isSliding ? ' sliding' : ''}`}>
            <img
              className={`home__image${isSliding ? ' slide-out' : ''}`}
              src={images[current]}
              alt="Dr. Amani"
              style={{ position: isSliding ? 'absolute' : 'relative', left: 0, top: 0 }}
            />
            {isSliding && next !== null && (
              <img
                className="home__image slide-in"
                src={images[next]}
                alt="Dr. Amani"
                style={{ position: 'relative', left: 0, top: 0 }}
              />
            )}
          </div>
          <button className="home__slider-btn right" onClick={nextImage} aria-label="Next image">&#62;</button>
        </div>
      </div>
      <div className="home__message-section">
        <h3 className="home__message-heading">A message from Md. Nyabera</h3>
        <blockquote className="home__message">
          "Education is not just about imparting knowledge, but about inspiring curiosity, nurturing confidence, and empowering every student to reach their fullest potential. My journey as an educator has been guided by a passion for science and a commitment to creating an inclusive, supportive environment where every learner can thrive. Together, let's embrace challenges, celebrate achievements, and build a brighter future through the power of learning."
        </blockquote>
      </div>
      
    </section>
  );
};

export default Home;
