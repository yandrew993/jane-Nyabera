import React, { useState } from 'react';
import './gallery.scss';

const galleryData = {
  teaching: [
    { src: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=facearea&w=400&h=400', alt: 'Teaching 1' },
    { src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=facearea&w=400&h=400', alt: 'Teaching 2' },
    { src: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=facearea&w=400&h=400', alt: 'Teaching 3' },
    { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=400&h=400', alt: 'Teaching 4' },
    { src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400', alt: 'Teaching 5' },
    { src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=400', alt: 'Teaching 6' },
  ],
  events: [
    { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400', alt: 'Event 1' },
    { src: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=facearea&w=400&h=400', alt: 'Event 2' },
    { src: 'https://images.unsplash.com/photo-1462536943532-57a629f6cc60?auto=format&fit=facearea&w=400&h=400', alt: 'Event 3' },
    { src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=400', alt: 'Event 4' },
    { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=facearea&w=400&h=400', alt: 'Event 5' },
  ],
  speaking: [
    { src: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=facearea&w=400&h=400', alt: 'Speaking 1' },
    { src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=400', alt: 'Speaking 2' },
    { src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400', alt: 'Speaking 3' },
    { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=400&h=400', alt: 'Speaking 4' },
    { src: 'https://images.unsplash.com/photo-1462536943532-57a629f6cc60?auto=format&fit=facearea&w=400&h=400', alt: 'Speaking 5' },
    { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400', alt: 'Speaking 6' },
  ],
  videos: [
    { src: 'https://img.icons8.com/ios-filled/100/000000/test-tube.png', label: 'Teaching Chemistry' },
    { src: 'https://img.icons8.com/ios-filled/100/000000/physics.png', label: 'Physics Demonstration' },
    { src: 'https://img.icons8.com/ios-filled/100/000000/calculator.png', label: 'Math Workshop' },
    { src: 'https://img.icons8.com/ios-filled/100/000000/experiment.png', label: 'Science Fair Highlights' },
    { src: 'https://img.icons8.com/ios-filled/100/000000/microphone.png', label: 'Public Speaking Seminar' },
    { src: 'https://img.icons8.com/ios-filled/100/000000/conference.png', label: 'Educational Conference' },
  ],
};

const allImages = [
  ...galleryData.teaching,
  ...galleryData.events,
  ...galleryData.speaking,
];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const handleImgClick = (img) => {
    setModalImg(img);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <div className="gallery">
      <h1 className="gallery__title">Gallery & Events</h1>
      <p className="gallery__desc">Explore a visual journey through my teaching career, school events, and public speaking engagements. This gallery showcases moments of learning, collaboration, and celebration.</p>

      <div className="gallery__section">
        <h2 className="gallery__section-title">Teaching Moments</h2>
        <div className="gallery__grid">
          {galleryData.teaching.map((img, i) => (
            <div className="gallery__item" key={i} onClick={() => handleImgClick(img)} tabIndex={0} role="button" aria-label="View image" >
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="gallery__section">
        <h2 className="gallery__section-title">School Events</h2>
        <div className="gallery__grid">
          {galleryData.events.map((img, i) => (
            <div className="gallery__item" key={i} onClick={() => handleImgClick(img)} tabIndex={0} role="button" aria-label="View image" >
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="gallery__section">
        <h2 className="gallery__section-title">Public Speaking</h2>
        <div className="gallery__grid">
          {galleryData.speaking.map((img, i) => (
            <div className="gallery__item" key={i} onClick={() => handleImgClick(img)} tabIndex={0} role="button" aria-label="View image" >
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="gallery__section">
        <h2 className="gallery__section-title">Videos</h2>
        <div className="gallery__grid gallery__grid--videos">
          {galleryData.videos.map((vid, i) => (
            <div className="gallery__item gallery__item--video" key={i} onClick={() => handleImgClick({ src: vid.src, alt: vid.label })} tabIndex={0} role="button" aria-label="View video thumbnail">
              <div className="gallery__video-thumb">
                <img src={vid.src} alt={vid.label} />
                <span className="gallery__play">▶</span>
              </div>
              <div className="gallery__video-label">{vid.label}</div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="gallery__modal" onClick={closeModal}>
          <div className="gallery__modal-content" onClick={e => e.stopPropagation()}>
            <button className="gallery__modal-close" onClick={closeModal} aria-label="Close image">×</button>
            <img src={modalImg.src} alt={modalImg.alt} className="gallery__modal-img" />
            <div className="gallery__modal-caption">{modalImg.alt}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
