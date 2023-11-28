import React from 'react';
import styles from './jobList.module.css';

export default function JobList({ jobs, deleteJob }) {
  return (
    <div>
      <h2>Featured Jobs</h2>
      {
        jobs.map((job, index) => (
          <div key={index} className={styles.jobItem}>
            <h3 className={styles.jobTitle}>{job.jobTitle}</h3>
            <div className={styles.companyInfo}>
              <span>{job.companyName}</span>
              <span>{job.employment}</span>
              <span>{job.location}</span>
              <span>{job.salary}</span>
        
            </div>
            <p className={styles.jobDescription}>{job.description}</p>
          </div>
        ))
      }
    </div>
  );
}