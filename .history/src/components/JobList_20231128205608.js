import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./jobList.module.css";

export default function JobList({ jobs, deleteJob, setJobToEdit, updateJob  }) {
  const { filterType, filterValue } = useParams();

  const [editingJobId, setEditingJobId] = useState(null);
  const [editedJob, setEditedJob] = useState({});

  // Filtering logic based on URL parameters
  const filteredJobs = filterType && filterValue
    ? jobs.filter(job => job[filterType].toString() === filterValue)
    : jobs;

  const handleEditClick = (job) => {
    setJobToEdit(job);
  };

  return (
    <div className={styles.jobListContainer}>
      <h2 className={styles.h2}>Featured Jobs</h2>
      {filteredJobs.map((job, index) => (
        <div key={index} className={styles.jobItem}>
          <div className={styles.titleLine}>
            <h3 className={styles.jobTitle}>{job.jobTitle}</h3>
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

          <div className={styles.companyInfo}>
            <div className={styles.companyName}>
              <span>{job.companyName}</span>
            </div>
            <div className={styles.companyDetails}>
              <span>{job.employment}</span>
              <span>{job.location}</span>
              <span>{job.salary}</span>
            </div>
          </div>
          <p className={styles.jobDescription}>{job.description}</p>
        </div>
      ))}
   
    </div>
  );
}

