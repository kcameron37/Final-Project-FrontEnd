import React, { useState } from 'react';

import JobList from './components/JobList.js';
import AddJob from './components/AddJob.js';


export default function App() {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  const deleteJob = (index) => {
    const newJobs = jobs.filter((_, idx) => idx !== index);
    setJobs(newJobs);
  };

  return (
    <div className="App">
      <p>Hello</p>
      <AddJob addJob={addJob} />
      <JobList jobs={jobs} deleteJob={deleteJob} />
    </div>
  );
}