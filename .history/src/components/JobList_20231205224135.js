import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./jobList.module.css";

export default function JobList({ jobs, deleteJob, updateJob }) {
  const { filterType, filterValue } = useParams();

  const [editingJobId, setEditingJobId] = useState(null);
  const [editedJob, setEditedJob] = useState({});

  const filteredJobs = filterType && filterValue
    ? jobs.filter(job => job[filterType].toString() === filterValue)
    : jobs;

  const handleEditClick = (job) => {
    setEditingJobId(job.id);
    setEditedJob(job);
  };

  const handleChange = (e, field) => {
    setEditedJob({ ...editedJob, [field]: e.target.value });
  };

  const handleSave = (jobId) => {
    updateJob(jobId, editedJob);
    setEditingJobId(null);
    setEditedJob({});
  };

  const handleCancelClick = () => {
    setEditingJobId(null);
    setEditedJob({});
  };

  return (
    <div className={styles.jobListContainer}>
      <h2 className={styles.h2}>Featured Jobs</h2>
      {filteredJobs.map((job) => (
        <div key={job.id} className={styles.jobItem}>
          {editingJobId === job.id ? (
            <div className={styles.formContainer}>
              <label htmlFor={`companyName-${job.id}`} className={styles.inputLabel}>Company Name</label>
              <input
                id={`companyName-${job.id}`}
                className={styles.inputField}
                placeholder="Company Name"
                value={editedJob.companyName || ''}
                onChange={(e) => handleChange(e, 'companyName')}
              />

              <label htmlFor={`jobTitle-${job.id}`} className={styles.inputLabel}>Job Title</label>
              <input
                id={`jobTitle-${job.id}`}
                className={styles.inputField}
                placeholder="Job Title"
                value={editedJob.jobTitle || ''}
                onChange={(e) => handleChange(e, 'jobTitle')}
              />

              <label htmlFor={`employmentType-${job.id}`} className={styles.inputLabel}>Employment Type</label>
              <select
                id={`employmentType-${job.id}`}
                className={styles.inputField}
                value={editedJob.employmentType || ''}
                onChange={(e) => handleChange(e, 'employmentType')}
              >
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </select>

              <label htmlFor={`location-${job.id}`} className={styles.inputLabel}>Location</label>
              <input
                id={`location-${job.id}`}
                className={styles.inputField}
                placeholder="Location"
                value={editedJob.location || ''}
                onChange={(e) => handleChange(e, 'location')}
              />

              <label htmlFor={`salary-${job.id}`} className={styles.inputLabel}>Salary</label>
              <input
                id={`salary-${job.id}`}
                className={styles.inputField}
                placeholder="Salary"
                value={editedJob.salary || ''}
                onChange={(e) => handleChange(e, 'salary')}
              />

              <label htmlFor={`description-${job.id}`} className={styles.inputLabel}>Job Description</label>
              <textarea
                id={`description-${job.id}`}
                className={styles.textAreaField}
                placeholder="Job Description"
                value={editedJob.description || ''}
                onChange={(e) => handleChange(e, 'description')}
              />

              <button onClick={() => handleSave(job.id)} className={styles.button}>Save</button>
              <button onClick={handleCancelClick} className={styles.button}>Cancel</button>
            </div>
          ) : (
            <div>
              <div className={styles.titleLine}>
                <h3 className={styles.jobTitle}>{job.jobTitle}</h3>
                <div className={styles.buttonGroup}>
                  <button
                    className={styles.editButton}
                    onClick={() => handleEditClick(job)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.deleteButton}
                    onClick={() => deleteJob(job.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className={styles.companyInfo}>
                <p>{job.companyName}</p>
                <p>{job.employmentType}</p>
                <p>{job.salary}</p>
                <p>{job.location}</p>
              </div>
              <p className={styles.jobDescription}>{job.description}</p>
            </div>
          )}
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
