import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Testimonial from './components/Testimonials/Testimonial';
import About from './pages/About/About';
import Experiance from './pages/Experiance/Experiance';
import Gallery from './pages/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MaintenanceWrapper from './MaintenanceWrapper';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <MaintenanceWrapper>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Testimonial />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experiance />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </MaintenanceWrapper>
  );
}

export default App;
