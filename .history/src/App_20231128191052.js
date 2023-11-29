import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import JobList from './components/JobList';
import AddJob from './components/AddJob';
import FilterComponent from './components/FilterComponent';
import NavBar from './components/NavBar';

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [jobToEdit, setJobToEdit] = useState(null);

  const addJob = (job) => {
    if (jobToEdit) {
      // Update existing job
      const updatedJobs = jobs.map(j => (j.id === jobToEdit.id ? { ...j, ...job } : j));
      setJobs(updatedJobs);
      setJobToEdit(null); // Reset edit state
    } else {
      // Add new job with a unique ID
      const newJobWithId = { ...job, id: Date.now() }; // Simple ID generation
      setJobs([...jobs, newJobWithId]);
    }
  };

  const deleteJob = (index) => {
    const newJobs = jobs.filter((_, idx) => idx !== index);
    setJobs(newJobs);
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <AddJob addJob={addJob} jobToEdit={jobToEdit} />
        <FilterComponent jobs={jobs} />
        <Routes>
          <Route path="/" element={<JobList jobs={jobs} deleteJob={deleteJob} setJobToEdit={setJobToEdit} />} />
          <Route path="/filter/:filterType/:filterValue" element={<JobList jobs={jobs} deleteJob={deleteJob} setJobToEdit={setJobToEdit} />} />
        </Routes>
      </div>
    </Router>
  );
}
