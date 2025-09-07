import React, { useState, useEffect } from 'react';
import './testimonial.scss';

const API_URL = 'https://nyabera-backend.onrender.com/api/testimonials';

// Cloudinary config placeholders
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dlb3uchv2/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'testimonial';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState({ name: '', relationship: '', testimonial: '', image: null, rating: 5 });
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const paginatedTestimonials = testimonials.slice(
    (currentPage - 1) * testimonialsPerPage,
    currentPage * testimonialsPerPage
  );

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTestimonials(data);
    } catch (err) {
      setError('Failed to load testimonials.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setForm({ ...form, rating });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    let imageUrl = imagePreview || 'user.jpg';

    // Upload image to Cloudinary if a file is selected
    if (form.image) {
      const data = new FormData();
      data.append('file', form.image);
      data.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
      try {
        const res = await fetch(CLOUDINARY_URL, {
          method: 'POST',
          body: data
        });
        const file = await res.json();
        if (file.secure_url) {
          imageUrl = file.secure_url;
        } else {
          setError('Image upload failed.');
          return;
        }
      } catch (err) {
        setError('Image upload failed.');
        return;
      }
    }

    const newTestimonial = {
      name: form.name,
      relationship: form.relationship,
      date: new Date().toISOString(),
      rating: form.rating,
      image: imageUrl,
      testimonial: form.testimonial,
    };
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTestimonial),
      });
      if (!res.ok) throw new Error('Failed to submit testimonial');
      setForm({ name: '', relationship: '', testimonial: '', image: null, rating: 5 });
      setImagePreview(null);
      fetchTestimonials();
    } catch (err) {
      setError('Failed to submit testimonial.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="testimonial-section">
      <h2>Testimonials</h2>
      {loading && <div>Loading testimonials...</div>}
      {error && <div className="error-message">{error}</div>}
      <div className="testimonial-list">
        {paginatedTestimonials.map((t, idx) => (
          <div className="testimonial-card" key={t.id || idx}>
            <img className="testimonial-avatar" src={t.image} alt={t.name} />
            <div className="testimonial-content">
              <div className="testimonial-header">
                <span className="testimonial-name">{t.name}</span>
                {t.relationship && <span className="testimonial-relationship"> - {t.relationship}</span>}
              </div>
              <div className="testimonial-date">{t.date && t.date.slice(0, 10)}</div>
              <div className="testimonial-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`star${i < t.rating ? ' active' : ''}`}>★</span>
                ))}
              </div>
              <div className="testimonial-text">{t.testimonial}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial-pagination">
        <span
          className={`arrow${currentPage === 1 ? ' disabled' : ''}`}
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          role="button"
          tabIndex={0}
          aria-label="Previous page"
        >&#60;</span>
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`page${currentPage === i + 1 ? ' active' : ''}`}
            onClick={() => setCurrentPage(i + 1)}
            role="button"
            tabIndex={0}
            aria-label={`Go to page ${i + 1}`}
          >{i + 1}</span>
        ))}
        <span
          className={`arrow${currentPage === totalPages || totalPages === 0 ? ' disabled' : ''}`}
          onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
          role="button"
          tabIndex={0}
          aria-label="Next page"
        >&#62;</span>
      </div>
      <form className="testimonial-form" onSubmit={handleSubmit}>
        <h3>Submit a Testimonial</h3>
        <label>
          Your Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </label>
        <label>
          Relationship to Teacher
          <select
            name="relationship"
            value={form.relationship}
            onChange={handleChange}
            required
          >
            <option value="">Select relationship</option>
            <option value="Colleague">Colleague</option>
            <option value="Former Student">Former Student</option>
            <option value="Student">Student</option>
          </select>
        </label>
        <label>
          Your Testimonial
          <textarea
            name="testimonial"
            value={form.testimonial}
            onChange={handleChange}
            rows={4}
            required
          />
        </label>
        <div className="testimonial-rating-input">
          <span>Rating: </span>
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`star-input${form.rating > i ? ' selected' : ''}`}
              onClick={() => handleRatingChange(i + 1)}
              role="button"
              tabIndex={0}
              aria-label={`Rate ${i + 1} star${i > 0 ? 's' : ''}`}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleRatingChange(i + 1)}
            >
              ★
            </span>
          ))}
        </div>
        <div className="testimonial-upload">
          <span>Upload an Image (Optional)</span>
          <input
            type="file"
            accept="image/*"
            id="testimonial-image"
            style={{ display: 'none' }}
            onChange={handleImageChange}
            disabled={submitting}
          />
          <label htmlFor="testimonial-image" className="upload-btn">
            Upload Image
          </label>
          {imagePreview && (
            <div className="image-preview-wrapper">
              <img src={imagePreview} alt="Preview" className="image-preview" />
              <button
                type="button"
                className="delete-image-btn"
                onClick={() => {
                  setForm({ ...form, image: null });
                  setImagePreview(null);
                }}
                disabled={submitting}
              >
                Remove
              </button>
            </div>
          )}
        </div>
        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit Testimonial'}
        </button>
        {submitting && (
          <div className="submitting-message">Submitting testimonial, please wait...</div>
        )}
      </form>
    </section>
  );
};

export default Testimonial;
