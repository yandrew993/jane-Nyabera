import React from 'react';
import './experiance.scss';

const Experiance = () => (
  <div className="experiance">
    <section className="experiance__section">
      <h1 className="experiance__title">Teaching Experience</h1>
      <div className="experiance__jobs">
        <div className="experiance__job">
          <h2>Mutumbu High School</h2>
          <div className="experiance__role">Principal <span>| 2024 - Present</span></div>
          <p>Currently serving as Principal, providing strategic leadership and vision for the entire school community. Oversees academic programs, staff development, and student welfare, while fostering a culture of excellence, innovation, and inclusivity. Under her guidance, Mutumbu High School has launched new STEM initiatives, expanded extracurricular opportunities, and strengthened partnerships with parents and the local community. Her commitment to holistic education continues to inspire both staff and students to achieve their highest potential.</p>
        </div>
        <div className="experiance__job">
          <h2>Sinaga Girls' High School</h2>
          <div className="experiance__role">Deputy Principal, Mathematics Teacher <span>| 2021 - 2024</span></div>
          <p>As Deputy Principal, provided visionary leadership in both academic and administrative domains, ensuring smooth school operations and fostering a positive learning environment. Taught mathematics with a focus on empowering young women in STEM, introducing peer mentoring and collaborative problem-solving sessions. Coordinated school-wide academic programs, managed staff development workshops, and led initiatives to improve student discipline and motivation. Her tenure saw a significant rise in mathematics performance and a more vibrant, inclusive school culture.</p>
        </div>
        <div className="experiance__job">
          <h2>Nyalunya Secondary School</h2>
          <div className="experiance__role">Deputy Principal & Head of Academics, Mathematics and Physics Teacher <span>| 2014 - 2021</span></div>
          <p>Served as Deputy Principal and Head of Academics, overseeing curriculum implementation and academic performance across all departments. As a mathematics teacher, pioneered the 'Math Hour' initiative, organized inter-school math contests and symposiums, and celebrated student achievements through award ceremonies. Fostered a culture of academic excellence and teamwork by actively participating in sports, motivating learners to balance academics and co-curricular activities. Under her leadership, the school saw a marked improvement in mathematics results and a vibrant, engaged student community.</p>
        </div>
        
        <div className="experiance__job">
          <h2>Hores Ongili High School</h2>
          <div className="experiance__role">Mathematics and Physics Teacher <span>| 2008 - 2014</span></div>
          <p>Taught mathematics and physics with a passion for making complex concepts accessible and engaging. Designed interactive lessons and laboratory experiments that encouraged curiosity and critical thinking. Mentored students in science fairs and math competitions, helping many discover their talents and pursue further studies in STEM fields. Built strong relationships with students and colleagues, contributing to a collaborative and supportive school environment.</p>
        </div>
      </div>
    </section>

    <section className="experiance__section">
      <h2 className="experiance__subtitle">Subjects Taught</h2>
      <div className="experiance__subjects">
        <div className="experiance__subject">
          <h3>Mathematics</h3>
          <p>Courses: Algebra I & II, Geometry, Pre-Calculus, Calculus AB & BC. <br />
          Teaching Resources: Utilized interactive software like GeoGebra and Desmos for visual learning. Implemented project-based learning with real-world applications of mathematical concepts. <br />
          <span className="experiance__success">Student Success: 90% of students passed AP Calculus exams with a score of 3 or higher.</span></p>
        </div>
        <div className="experiance__subject">
          <h3>Physics</h3>
          <p>Courses: Introductory Physics, AP Physics 1 & 2, AP Physics C. <br />
          Teaching Resources: Developed hands-on lab activities to reinforce theoretical concepts. Integrated simulations and virtual labs for remote learning. <br />
          <span className="experiance__success">Student Success: 85% of students achieved a grade of B or higher in AP Physics courses.</span></p>
        </div>
        <div className="experiance__subject">
          <h3>Chemistry</h3>
          <p>Courses: General Chemistry, AP Chemistry. <br />
          Teaching Resources: Created engaging experiments with a focus on safety and practical applications. Used molecular modeling software to visualize chemical structures and reactions. <br />
          <span className="experiance__success">Student Success: 92% of students passed the AP Chemistry exam, with many achieving top scores.</span></p>
        </div>
      </div>
    </section>
  </div>
);

export default Experiance;
