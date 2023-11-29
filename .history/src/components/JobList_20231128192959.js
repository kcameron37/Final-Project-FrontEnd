import React from 'react';
import { useParams } from 'react-router-dom';
import styles from "./jobList.module.css";

export default function JobList({ jobs, deleteJob, setJobToEdit, jobToEdit }) {
  const { filterType, filterValue } = useParams();

  const handleEditClick = (job) => {
    setJobToEdit(job);
  };

  const isEditing = (job) => {
    return jobToEdit && job.id === jobToEdit.id;
  };

   // Filtering logic based on URL parameters
   const filteredJobs = filterType && filterValue
   ? jobs.filter(job => job[filterType].toString() === filterValue)
   : jobs;

  return (
    <div className={styles.jobListContainer}>
      <h2 className={styles.h2}>Featured Jobs</h2>
      {filteredJobs.map((job, index) => (
        <div key={index} className={styles.jobItem}>
               {isEditing(job) ? (
            <div>
              <input
                type="text"
                name="jobTitle"
                defaultValue={jobToEdit.jobTitle}
              />
              <button onClick={() => setJobToEdit(null)}>Cancel</button>
              <button onClick={() => {/* logic to handle save */}}>Save</button>
            </div>
          ) : (
            <div>
              <h3 className={styles.jobTitle}>{job.jobTitle}</h3>
              {/* Display other job details */}
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
      <div className={styles.jobListContainer}>
        <div className={styles.jobItem}>
          <div className={styles.titleLine}>
            <h3 className={styles.jobTitle}>Software Developer</h3>

            <div className={styles.companyInfo}>
              <div className={styles.companyName}>
                <span>Tech Solutions Inc.</span>
              </div>
            </div>
            <div className={styles.companyDetails}>
              <span>Full Time</span>
              <span>Vancouver, BC</span>
              <span>$100,000</span>
            </div>
          </div>
          <p className={styles.jobDescription}>
            We are seeking a talented software developer to join our dynamic
            team. The ideal candidate will have strong programming skills and a
            passion for creating innovative software solutions.
          </p>
        </div>
      </div>

      <div className={styles.jobListContainer}>
        <div className={styles.jobItem}>
          <div className={styles.titleLine}>
            <h3 className={styles.jobTitle}>Marketing Specialist</h3>
            <div className={styles.companyInfo}>
              <div className={styles.companyName}>
                <span>Digital Marketing Agency</span>
              </div>
            </div>
            <div className={styles.companyDetails}>
              <span>Full Time</span>
              <span>Vancouver, BC</span>
              <span>$200,000</span>
            </div>
          </div>
          <p className={styles.jobDescription}>
            Join our marketing team to develop and implement creative marketing
            strategies. The ideal candidate will have a strong understanding of
            digital marketing trends and excellent communication skills
          </p>
        </div>
      </div>
    </div>
  );
}

