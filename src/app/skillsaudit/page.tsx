"use client"; // Ensure the page is treated as a client-side component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import from next/navigation for the app directory

const jobTypes: Record<string, string[]> = {
  "Healthcare Practitioners and Technical Occupations": [
    "Chiropractor", "Dentist", "Dietitian or Nutritionist", "Optometrist",
    "Pharmacist", "Physician", "Physician Assistant", "Podiatrist",
    "Registered Nurse", "Therapist", "Veterinarian",
    "Health Technologist or Technician",
    "Other Healthcare Practitioners and Technical Occupation"
  ],
  "Healthcare Support Occupations": [
    "Nursing, Psychiatric, or Home Health Aide",
    "Occupational and Physical Therapist Assistant or Aide",
    "Other Healthcare Support Occupation"
  ],
  "Business, Executive, Management, and Financial Occupations": [
    "Chief Executive", "General and Operations Manager",
    "Advertising, Marketing, Promotions, Public Relations, and Sales Manager",
    "Operations Specialties Manager", "Construction Manager",
    "Engineering Manager", "Accountant, Auditor",
    "Business Operations or Financial Specialist", "Business Owner",
    "Other Business, Executive, Management, Financial Occupation"
  ],
  "Engineering and Architecture Occupations": [
    "Civil Engineer", "Mechanical Engineer", "Electrical Engineer",
    "Software Engineer", "Architect", "Urban Planner",
    "Environmental Engineer", "Aerospace Engineer",
    "Industrial Engineer", "Other Engineering or Architecture Occupation"
  ],
  "Education, Training, and Library Occupations": [
    "Elementary School Teacher", "Secondary School Teacher", "College Professor",
    "Vocational Instructor", "School Administrator", "Librarian",
    "Other Education, Training, and Library Occupation"
  ],
  "Computer and Mathematical Occupations": [
    "Software Developer", "Data Scientist", "Cybersecurity Specialist",
    "Network Administrator", "Database Administrator", "Systems Analyst",
    "Statistician", "Other Computer and Mathematical Occupation"
  ],
  "Legal Occupations": [
    "Lawyer", "Judge", "Paralegal", "Legal Assistant",
    "Other Legal Occupation"
  ],
  "Arts, Design, Entertainment, Sports, and Media Occupations": [
    "Graphic Designer", "Fashion Designer", "Actor", "Musician", "Journalist",
    "Photographer", "Editor", "Other Arts, Design, Entertainment, Sports, and Media Occupation"
  ],
  "Community and Social Service Occupations": [
    "Social Worker", "Counselor", "Religious Worker", "Community Organizer",
    "Other Community and Social Service Occupation"
  ],
  "Protective Service Occupations": [
    "Police Officer", "Firefighter", "Security Guard", "Detective",
    "Other Protective Service Occupation"
  ],
  "Sales and Related Occupations": [
    "Retail Salesperson", "Sales Manager", "Real Estate Agent", "Insurance Agent",
    "Other Sales and Related Occupation"
  ],
  "Food Preparation and Serving Related Occupations": [
    "Chef", "Cook", "Food Service Manager", "Waiter or Waitress",
    "Other Food Preparation and Serving Related Occupation"
  ],
  "Construction and Extraction Occupations": [
    "Carpenter", "Electrician", "Plumber", "Construction Laborer",
    "Other Construction and Extraction Occupation"
  ],
  "Installation, Maintenance, and Repair Occupations": [
    "Automotive Service Technician", "Electrician", "HVAC Technician",
    "Maintenance Worker", "Other Installation, Maintenance, and Repair Occupation"
  ],
  "Transportation and Material Moving Occupations": [
    "Truck Driver", "Bus Driver", "Pilot", "Train Operator", "Taxi Driver",
    "Other Transportation and Material Moving Occupation"
  ],
  "Farming, Fishing, and Forestry Occupations": [
    "Farmer", "Fisher", "Forester", "Agricultural Worker",
    "Other Farming, Fishing, and Forestry Occupation"
  ],
  "Office and Administrative Support Occupations": [
    "Administrative Assistant", "Secretary", "Receptionist",
    "Data Entry Clerk", "Office Manager",
    "Other Office and Administrative Support Occupation"
  ],
  "Production Occupations": [
    "Machinist", "Assembler", "Production Manager",
    "Factory Worker", "Other Production Occupation"
  ],
  "Personal Care and Service Occupations": [
    "Childcare Worker", "Personal Care Aide", "Fitness Trainer",
    "Hairdresser", "Other Personal Care and Service Occupation"
  ],
  "Military Specific Occupations": [
    "Army Officer", "Air Force Pilot", "Naval Engineer",
    "Military Police", "Other Military Specific Occupation"
  ],
  // Add other job types here...
};

const SkillsAudit = () => {
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [skillRating, setSkillRating] = useState<string>("");

  const router = useRouter(); // Correct hook for client-side navigation in Next.js (app directory)

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
    setSelectedRole(""); // Reset the role when changing job type
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
  };

  const handleStartAssessment = () => {
    if (selectedRole && skillRating) {
      router.push(`/skillsassessment?role=${selectedRole}&level=${skillRating}`);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Skills Audit</h1>

      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Select Job Type</label>
        <select
          value={selectedType}
          onChange={handleTypeChange}
          className="w-full p-3 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">-- Select one --</option>
          {Object.keys(jobTypes).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {selectedType && (
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Select Job Role</label>
          <select
            value={selectedRole}
            onChange={handleRoleChange}
            className="w-full p-3 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Select one --</option>
            {jobTypes[selectedType]?.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedRole && (
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Rate Your Expertise</label>
          <select
            value={skillRating}
            onChange={(e) => setSkillRating(e.target.value)}
            className="w-full p-3 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Select your expertise level --</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
      )}

      {skillRating && (
        <div className="mt-6 text-center">
          <button
            onClick={handleStartAssessment}
            className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600"
          >
            Start Assessment
          </button>
        </div>
      )}
    </div>
  );
};

export default SkillsAudit;
