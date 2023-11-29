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
      const updatedJobs = jobs.map(j => (j.id === jobToEdit.id ? { ...j, ...job } : j));
      setJobs(updatedJobs);
      setJobToEdit(null); 
    } else {
      const newJobWithId = { ...job, id: Date.now() }; 
      setJobs([...jobs, newJobWithId]);
    }
  };

  const deleteJob = (index) => {
    const newJobs = jobs.filter((_, idx) => idx !== index);
    setJobs(newJobs);
  };

  const updateJob = (jobId, updatedDetails) => {
    const updatedJobs = jobs.map(job => 
      job.id === jobId ? { ...job, ...updatedDetails } : job
    );
    setJobs(updatedJobs);
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
