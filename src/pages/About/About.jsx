import React from 'react';
import './about.scss';

const About = () => (
  <div className="about">
    <section className="about__header">
      <div className="about__header-bg"></div>
      <h1 className="about__name">Md. Nyabera</h1>
      <h2 className="about__roles">Mathematics, Physics, Chemistry, and Administration</h2>
      <p className="about__intro">
        With over 35 years of experience in education, Md. Nyabera is dedicated to fostering a love for science and mathematics in her students. Her approach combines rigorous academic content with practical applications, ensuring students not only understand complex concepts but also know how to apply them in real-world scenarios.
      </p>
    </section>

    <section className="about__education">
      <h3 className="about__section-title">Educational Background</h3>
      <div className="about__education-list">
        <div className="about__degree">
          <span className="about__degree-title">M.S. in  Education Science</span>
          <span className="about__degree-school">University of Science and Technology, 2010</span>
          <span className="about__degree-skills">Skills: Advanced research, curriculum design, educational leadership, science communication. Topics: Pedagogy, assessment strategies, educational psychology, and science curriculum development.</span>
        </div>
        <div className="about__degree">
          <span className="about__degree-title">M.S. in Mathematics</span>
          <span className="about__degree-school">State University, 2006</span>
          <span className="about__degree-skills">Skills: Mathematical modeling, data analysis, problem-solving, instructional strategies. Topics: Algebra, calculus, geometry, statistics, and trigonometry.</span>
        </div>
        <div className="about__degree">
          <span className="about__degree-title">B.S. in Physics</span>
          <span className="about__degree-school">City College, 2004</span>
          <span className="about__degree-skills">Skills: Experimental techniques, critical thinking, laboratory management, teamwork. Topics: Mechanics, electricity & magnetism, waves, optics, and thermodynamics.</span>
        </div>
      </div>
    </section>

    <section className="about__methodology">
      <h3 className="about__section-title">Teaching Methodology</h3>
      <p className="about__methodology-text">
        Md. Nyabera employs a student-centered approach, focusing on interactive learning and problem-solving. Her classes are designed to encourage critical thinking and collaboration, with a strong emphasis on hands-on experiments and projects. She believes in tailoring her teaching to meet the diverse needs of her students, ensuring that each student can achieve their full potential.
      </p>
    </section>

    <section className="about__achievements">
      <h3 className="about__section-title">Achievements</h3>
      <ul className="about__achievements-list">
        <li>
          <span className="about__achievement-title">Award for Excellence in Teaching</span>
          <span className="about__achievement-year">2018</span>
        </li>
        <li>
          <span className="about__achievement-title">Published Research on Quantum Mechanics</span>
          <span className="about__achievement-year">2015</span>
        </li>
        <li>
          <span className="about__achievement-title">Developed Innovative Curriculum for High School Physics</span>
          <span className="about__achievement-year">2012</span>
        </li>
      </ul>
    </section>

    <section className="about__quotes">
      <h3 className="about__section-title"> Best Quotes From Madam to students</h3>
      <blockquote className="about__quote">“If you fail to plan you plan to fail”</blockquote>
      <blockquote className="about__quote about__quote--italic">“Creativity is intelligence having fun. Use your imagination and knowledge to solve the problems you see around you.”</blockquote>
      <blockquote className="about__quote about__quote--italic">“Mathematics and physics are not just subjects—they are the keys to unlocking solutions for real-world challenges. Embrace them, and you can change the world.”</blockquote>
    </section>
  </div>
);

export default About;
