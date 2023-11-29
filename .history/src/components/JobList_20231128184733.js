import React from 'react';
import { useParams } from 'react-router-dom';
import styles from "./jobList.module.css";

export default function JobList({ jobs, deleteJob, setJobToEdit }) {
  const { filterType, filterValue } = useParams();

  const filteredJobs = filterType && filterValue 
    ? jobs.filter(job => job[filterType].toString() === filterValue)
    : jobs;

  // Function to handle edit button click
  const handleEditClick = (job) => {
    setJobToEdit(job); // Set the job to be edited
  };

  return (
    <div className={styles.jobListContainer}>
      <h2 className={styles.h2}>Featured Jobs</h2>
      {filteredJobs.map((job, index) => (
        <div key={index} className={styles.jobItem}>
          <div className={styles.titleLine}>
            <h3 className={styles.jobTitle}>{job.jobTitle}</h3>
            {/* Edit button */}
            <button
              className={styles.editButton}
              onClick={() => handleEditClick(job)}
            >
              Edit
            </button>
            <button
              className={styles.deleteButton}
              onClick={() => deleteJob(index)}
            >
              Delete
            </button>
          </div>

          {/* ... existing job details rendering ... */}
        </div>
      ))}
    </div>
  );
}
