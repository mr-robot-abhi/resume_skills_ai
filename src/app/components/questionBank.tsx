
import React, { useState } from 'react';
import Link from "next/link";


const questionBank: Record<string, Record<string, Record<string, string>>> = {
    "Healthcare Practitioners and Technical Occupations": {
      "Chiropractor": {
        "Beginner": "What are the basic principles of chiropractic care?",
        "Intermediate": "Explain spinal manipulation and its common applications.",
        "Advanced": "How do you assess and treat chronic back pain using chiropractic methods?",
        "Expert": "What are the latest advancements in chiropractic care for sports injuries?"
      },
      "Dentist": {
        "Beginner": "What are the main types of dental treatments?",
        "Intermediate": "Explain the process of performing a root canal treatment.",
        "Advanced": "How do you manage complex dental restorations?",
        "Expert": "What innovations in dental surgery have emerged in the past decade?"
      },
      // Add remaining roles similarly for Healthcare Practitioners...
    },
    "Healthcare Support Occupations": {
      "Nursing, Psychiatric, or Home Health Aide": {
        "Beginner": "What are the essential duties of a home health aide?",
        "Intermediate": "How do you manage patients with psychiatric conditions?",
        "Advanced": "Describe how to handle emergency situations in home care.",
        "Expert": "What innovations have improved psychiatric support care in recent years?"
      },
      // Add remaining roles similarly for Healthcare Support...
    },
    "Business, Executive, Management, and Financial Occupations": {
      "Chief Executive": {
        "Beginner": "What are the primary responsibilities of a CEO?",
        "Intermediate": "How do you create and manage a company's strategic vision?",
        "Advanced": "What is the role of a CEO in crisis management?",
        "Expert": "Describe the impact of corporate governance on business leadership."
      },
      // Add remaining roles similarly for Business, Executive, etc...
    },
    // Add other categories similarly...
  };
  
  export default questionBank;
  