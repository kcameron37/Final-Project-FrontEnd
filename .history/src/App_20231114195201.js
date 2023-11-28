import React, { useEffect } from 'react';

import JobList from './components/JobList.js';
import AddJob from './components/AddJob.js';
import NavBar from './components/NavBar.js';

export default function App() {
  const [jobs, setJobs] = React.useState([]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  const deleteJob = (index) => {
    const newJobs = jobs.filter((_, idx) => idx !== index);
    setJobs(newJobs);
  };

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="App">
      <NavBar />
      <AddJob addJob={addJob} />
      <JobList jobs={jobs} deleteJob={deleteJob} />
    </div>
  );
}
