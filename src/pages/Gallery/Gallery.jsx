import React, { useState } from 'react';
import './gallery.scss';

const galleryData = {
  teaching: [
    { src: '/Meeting 1.jpeg', alt: 'Meeting 1' },
    { src: '/Meeting 2.jpeg', alt: 'Meeting 2' },
    { src: '/Meeting 3.jpeg', alt: 'Sub county KESSHA meeting at Joventure hotel KSM 2021' },
  ],
  events: [
    { src: '/Event 1.jpeg', alt: 'Academic top students for sinaga visited UON library at Kisumu' },
    { src: '/Event 2.jpeg', alt: 'Lesson observation in progress' },
    { src: '/Event 3.jpeg', alt: 'Mutumbu Agriculture students visited Bukura Agricultural college for more skills' },
    { src: '/Event 4.jpeg', alt: 'Event 4' },
    { src: '/Event 5.jpeg', alt: 'Event 5' },
    { src: '/Event 6.jpeg', alt: 'Event 6' },
    { src: '/Event 7.jpeg', alt: 'Event 7' },
    { src: '/Event 8.jpeg', alt: 'Event 8' },
    { src: '/Event 9.jpeg', alt: 'Event 9' },
    { src: '/Event 10.jpeg', alt: 'Event 10' },
    { src: '/Event 11.jpeg', alt: 'Event 11' },
    { src: '/Event 12.jpeg', alt: 'Event 12' },
    { src: '/Event 13.jpeg', alt: 'Event 13' },
    { src: '/Event 14.jpeg', alt: 'Awarding the best maths student' },
  ],
  speaking: [
    { src: '/Moment 1.jpeg', alt: 'Moment 1' },
    { src: '/Moment 2.jpeg', alt: 'Moment 2' },
    { src: '/Moment 3.jpeg', alt: 'Moment 3' },
    { src: '/Moment 4.jpeg', alt: 'Moment 4' },
    { src: '/Moment 5.jpeg', alt: 'Moment 5' },
    { src: '/Moment 6.jpeg', alt: 'Moment 6' },
    { src: '/Moment 7.jpeg', alt: 'Moment 7' },
    { src: '/Moment 8.jpeg', alt: 'Moment 8' },
    { src: '/Moment 9.jpeg', alt: 'Moment 9' },
    { src: '/Moment 10.jpeg', alt: 'Moment 10' },
    { src: '/Moment 11.jpeg', alt: 'Moment 11' },
    { src: '/Moment 12.jpeg', alt: 'Moment 12' },
    { src: '/Moment 13.jpeg', alt: 'Celebrating my maths teacher on retirement' },
    { src: '/Moment 14.jpeg', alt: 'Senior Mathematicians delivered a shield to Mr Okudo' },
  ],
  videos: [
    { youtubeId: 'AQcpvc-KXYI', label: 'Developing Sinaga School Anthem with Students' },
    { youtubeId: 'xjvYQYYi0MY', label: 'Mutumbu teachers motivational party' },
    { youtubeId: 'J6hHV3Fh408', label: 'Distributing pads at Mutumbu courtesy of DTB' },
    { youtubeId: '1yJECteVSuA', label: 'Mutumbu staff playing football versus school team' },
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

const GallerySection = ({ title, images, handleImgClick }) => {
  const [page, setPage] = useState(0);
  const imagesPerPage = 6;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const pagedImages = images.slice(page * imagesPerPage, (page + 1) * imagesPerPage);

  return (
    <div className="gallery__section">
      <h2 className="gallery__section-title">{title}</h2>
      <div className="gallery__grid">
        {pagedImages.map((img, i) => (
          <div className="gallery__item" key={i} onClick={() => handleImgClick(img)} tabIndex={0} role="button" aria-label="View image" >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="gallery__pagination">
          <button onClick={() => setPage(page - 1)} disabled={page === 0}>&lt;</button>
          <span>Page {page + 1} of {totalPages}</span>
          <button onClick={() => setPage(page + 1)} disabled={page === totalPages - 1}>&gt;</button>
        </div>
      )}
    </div>
  );
};

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [modalVideo, setModalVideo] = useState(null);

  const handleImgClick = (img) => {
    setModalImg(img);
    setModalVideo(null);
    setModalOpen(true);
  };
  const handleVideoClick = (vid) => {
    setModalVideo(vid);
    setModalImg(null);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <div className="gallery">
      <h1 className="gallery__title">Gallery & Events</h1>
      <p className="gallery__desc">Explore a visual journey through my teaching career, school events, and public speaking engagements. This gallery showcases moments of learning, collaboration, and celebration.</p>

      <GallerySection title="Meetings And Workshops" images={galleryData.teaching} handleImgClick={handleImgClick} />
      <GallerySection title="School Events And Lectures" images={galleryData.events} handleImgClick={handleImgClick} />
      <GallerySection title="Moments with Family and Collegues" images={galleryData.speaking} handleImgClick={handleImgClick} />

      <div className="gallery__section">
        <h2 className="gallery__section-title">Videos</h2>
        <div className="gallery__grid gallery__grid--videos">
          {galleryData.videos.map((vid, i) => (
            <div className="gallery__item gallery__item--video" key={i} tabIndex={0} role="button" aria-label="View video" onClick={() => handleVideoClick(vid)}>
              {vid.youtubeId ? (
                <div className="gallery__video-embed">
                  <img src={`https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`} alt={vid.label} />
                  <span className="gallery__play">▶</span>
                </div>
              ) : (
                <div className="gallery__video-thumb">
                  <img src={vid.src} alt={vid.label} />
                  <span className="gallery__play">▶</span>
                </div>
              )}
              <div className="gallery__video-label">{vid.label}</div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="gallery__modal" onClick={closeModal}>
          <div className="gallery__modal-content gallery__modal-content--video" onClick={e => e.stopPropagation()}>
            <button className="gallery__modal-close" onClick={closeModal} aria-label="Close modal">×</button>
            {modalImg && (
              <>
                <img src={modalImg.src} alt={modalImg.alt} className="gallery__modal-img" />
                <div className="gallery__modal-caption">{modalImg.alt}</div>
              </>
            )}
            {modalVideo && modalVideo.youtubeId && (
              <div className="gallery__modal-video-wrapper">
                <iframe
                  width="800"
                  height="450"
                  src={`https://www.youtube.com/embed/${modalVideo.youtubeId}?autoplay=1`}
                  title={modalVideo.label}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="gallery__modal-caption">{modalVideo.label}</div>
              </div>
            )}
            {modalVideo && modalVideo.src && (
              <div className="gallery__modal-video-wrapper">
                <video width="800" height="450" controls autoPlay>
                  <source src={modalVideo.src} />
                  Your browser does not support the video tag.
                </video>
                <div className="gallery__modal-caption">{modalVideo.label}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
