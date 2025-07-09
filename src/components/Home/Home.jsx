import React, { useState, useEffect } from 'react';
import './home.scss';

const images = [
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/women/45.jpg',
  'https://randomuser.me/api/portraits/women/46.jpg',
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 100000); // 10 seconds
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="home">
      <div className="home__container">
        <div className="home__info">
          <h1 className="home__title">Md Nyabera</h1>
          <h2 className="home__subtitle">M.S. in  Education Science</h2>
          <p className="home__expertise">
            Expert in Mathematics, Physics, and Chemistry in<br />
            the department of Science
          </p>
          <a href="/about" className="home__button">Explore more</a>
        </div>
        <div className="home__image-wrapper">
          <button className="home__slider-btn left" onClick={prevImage} aria-label="Previous image">&#60;</button>
          <img
            className="home__image"
            src={images[current]}
            alt="Dr. Amani"
          />
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
