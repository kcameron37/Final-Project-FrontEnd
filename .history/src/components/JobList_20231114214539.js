import React from 'react';
import styles from './jobList.module.css';


export default function JobList({ jobs, deleteJob }) {
  return (
    <div>
      <hr />
      <h2>Featured Jobs</h2>
   {
        jobs.map((job, index) => (
          <div key={index} className={styles.jobItem}>
            <h3 className={styles.jobTitle}>{job.jobTitle}</h3>
            <button className={styles.button} onClick={() => console.log('Make Edit Do Something')}>Edit</button>
            <button className={styles.button} onClick={() => deleteJob(index)}>Delete</button>
            <p>{job.companyName} • {job.employment} • {job.location} • {job.salary}</p>
            <p>{job.description}</p>
          </div>
        ))
      }
    </div>
  );
}