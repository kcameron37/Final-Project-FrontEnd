import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./jobList.module.css";

export default function JobList({ jobs, deleteJob, setJobToEdit, jobToEdit }) {
  const { filterType, filterValue } = useParams();
  const [editingJobId, setEditingJobId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    companyName: "",
    jobTitle: "",
    employment: "",
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
              <input
                type="text"
                value={editFormData.jobTitle}
                onChange={(e) => handleInputChange(e, 'jobTitle')}
              />
              {/* Other fields like companyName, employment, etc. */}
              <button onClick={() => handleSaveClick(job.id)}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </div>
          ) : (
            <div>
              <h3 className={styles.jobTitle}>{job.jobTitle}</h3>
              {/* Other job details */}
              <button onClick={() => handleEditClick(job)}>Edit</button>
              <button onClick={() => deleteJob(job.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
