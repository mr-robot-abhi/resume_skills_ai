"use client"; // Ensure the page is treated as a client-side component

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; // Use next/navigation for app directory
import questionBank from '../components/questionBank'; // Ensure the correct import

const SkillsAssessment = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Use this to get query params in the app directory
  const role = searchParams.get('role');
  const level = searchParams.get('level');

  const [question, setQuestion] = useState<string>("");

  useEffect(() => {
    if (role && level) {
      const roleQuestions = questionBank[role as keyof typeof questionBank];
  
      if (roleQuestions && Array.isArray(roleQuestions[level])) {
        setQuestion(roleQuestions[level][0]); // Use the first question, or adjust as needed
      } else {
        setQuestion("No question available for this combination.");
      }
    }
  }, [role, level]);
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Skills Assessment</h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Role: {role}</h2>
        <h3 className="text-xl mb-4">Level: {level}</h3>
        <p className="text-lg">{question}</p>
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={() => router.push('/skillsaudit')} // Navigate back to skills audit
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 mr-4" // Added margin-right for spacing
        >
          Back to Skills Audit
        </button>
        <button
          onClick={() => router.push('/assessmentquestionnaire')} // Navigate to the dummy assessment page
          className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600"
        >
          Start Assessment
        </button>
      </div>
    </div>
  );
};

export default SkillsAssessment;
