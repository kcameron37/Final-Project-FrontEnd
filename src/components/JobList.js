import React from 'react';
import { useParams } from 'react-router-dom';

export default function JobList({ jobs, deleteJob }) {
  const { filterType, filterValue } = useParams();

  // Filtering logic based on URL parameters
  const filteredJobs = filterType && filterValue 
    ? jobs.filter(job => job[filterType].toString() === filterValue)
    : jobs;

  return (
    <div>
      <h2>Featured Jobs</h2>
      {
        filteredJobs.map((job, index) => (
          <div key={index} className="job-item">
            <h3>{job.jobTitle}</h3>
            <button onClick={() => console.log('Make Edit Do Something')}>Edit</button>
            <button onClick={() => deleteJob(index)}>Delete</button>
            <p>{job.companyName} • {job.employment} • {job.location} • {job.salary}</p>
            <p>{job.description}</p>
            <hr />
          </div>
        ))
      }
    </div>
  );
}
