// src/pages/InteractiveLearning.js
import React from 'react';

const InteractiveLearning = () => {
  return (
    <div className="interactive-learning">
      <h1>Interactive Learning at Sulla</h1>
      
      <section>
        <h2>Learning Pathways</h2>
        <p>Our platform uses adaptive learning pathways to personalize your educational journey. Based on your progress and performance, we adjust the content difficulty and suggest relevant topics to optimize your learning experience.</p>
      </section>

      <section>
        <h2>Data-Driven Improvements</h2>
        <p>We collect anonymized user data to continuously improve our platform. This includes:</p>
        <ul>
          <li>Quiz performance statistics</li>
          <li>Time spent on each module</li>
          <li>User engagement with interactive elements</li>
        </ul>
        <p>This data helps us identify areas for improvement and create more effective learning materials.</p>
      </section>

      <section>
        <h2>Technology Stack</h2>
        <p>Our platform leverages cutting-edge technologies to provide an engaging learning experience:</p>
        <ul>
          <li>React for interactive user interfaces</li>
          <li>Tailwind CSS for responsive design</li>
          <li>Node.js and Express for backend services</li>
          <li>MongoDB for storing user progress and analytics</li>
        </ul>
      </section>

      <section>
        <h2>Privacy and Data Protection</h2>
        <p>We are committed to protecting your privacy. All personal data is encrypted and stored securely. You can opt-out of data collection at any time through your account settings.</p>
      </section>
    </div>
  );
};

export default InteractiveLearning;
