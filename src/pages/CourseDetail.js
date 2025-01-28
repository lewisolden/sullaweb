// Filename: src/pages/CourseDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import courseModules from '../data/courseModules';

const CourseDetail = () => {
  const { moduleId } = useParams();
  const module = courseModules.find(m => m.id === moduleId);

  if (!module) return <div>Module not found</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{module.title}</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg">{module.description}</p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Chapters</h2>
        <ul className="list-disc pl-5">
          {module.chapters.map((chapter, index) => (
            <li key={index} className="mb-2">{chapter}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Courses;
