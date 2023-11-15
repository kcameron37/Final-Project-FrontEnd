import React from 'react';
import styles from './addJob.module.css';


export default function JobList({ jobs, deleteJob }) {
  return (
    <div>
      <hr />
      <h2>Featured Jobs</h2>
      {
        jobs.map((job, index) => (
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