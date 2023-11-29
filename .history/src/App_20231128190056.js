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
    setJobs([...jobs, job]);
  };

  const deleteJob = (index) => {
    const newJobs = jobs.filter((_, idx) => idx !== index);
    setJobs(newJobs);
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <AddJob addJob={addJob} />
        <FilterComponent jobs={jobs} />
        <Routes>
          <Route path="/" element={<JobList jobs={jobs} deleteJob={deleteJob} />} />
          <Route path="/filter/:filterType/:filterValue" element={<JobList jobs={jobs} deleteJob={deleteJob} />} />
        </Routes>
      </div>
    </Router>
  );
}
