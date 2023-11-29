import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./jobList.module.css";

export default function JobList({ jobs, deleteJob, setJobToEdit }) {
  const { filterType, filterValue } = useParams();
  const [editingJobId, setEditingJobId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    companyName: "",
    jobTitle: "",
    employment: "", // Initialize to an empty string
    location: "",
    salary: "",
    description: ""
  });

  const handleEditClick = (job) => {
    setEditingJobId(job.id);
    setEditFormData(job);
  };

  const handleSaveClick = (jobId) => {
    setJobToEdit({ ...editFormData, id: jobId });
    setEditingJobId(null);
  };

  const handleCancelClick = () => {
    setEditingJobId(null);
  };

  const handleInputChange = (event, field) => {
    setEditFormData({ ...editFormData, [field]: event.target.value });
  };

  const isEditing = (jobId) => editingJobId === jobId;

  // Filtering logic based on URL parameters
  const filteredJobs = filterType && filterValue
    ? jobs.filter(job => job[filterType].toString() === filterValue)
    : jobs;

  return (
    <div className={styles.jobListContainer}>
      <h2 className={styles.h2}>Featured Jobs</h2>
      {filteredJobs.map((job) => (
        <div key={job.id} className={styles.jobItem}>
          {isEditing(job.id) ? (
            <div>
              <label htmlFor="jobTitle">Job Title:</label>
              <input
                type="text"
                id="jobTitle"
                value={editFormData.jobTitle}
                onChange={(e) => handleInputChange(e, 'jobTitle')}
              />
              <label htmlFor="companyName">Company Name:</label>
              <input
                type="text"
                id="companyName"
                value={editFormData.companyName}
                onChange={(e) => handleInputChange(e, 'companyName')}
              />
              <label htmlFor="employment">Employment Type:</label>
              <select
                id="employment"
                value={editFormData.employment}
                onChange={(e) => handleInputChange(e, 'employment')}
              >
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </select>
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                value={editFormData.location}
                onChange={(e) => handleInputChange(e, 'location')}
              />
              <label htmlFor="salary">Salary:</label>
              <input
                type="text"
                id="salary"
                value={editFormData.salary}
                onChange={(e) => handleInputChange(e, 'salary')}
              />
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                id="description"
                value={editFormData.description}
                onChange={(e) => handleInputChange(e, 'description')}
              />
              <button onClick={() => handleSaveClick(job.id)}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </div>
          ) : (
            <div>
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
                  onClick={() => deleteJob(job.id)}
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
          )}
        </div>
      ))}
    </div>
  );
}
