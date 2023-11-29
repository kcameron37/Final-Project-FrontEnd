const handleEditClick = (job) => {
  setEditingJobId(job.id);
  setEditedJob(job);
};

const handleSaveClick = () => {
  updateJob(editingJobId, editedJob);
  setEditingJobId(null);
};

const handleChange = (e, field) => {
  setEditedJob({ ...editedJob, [field]: e.target.value });
};

return (
  <div className={styles.jobListContainer}>
    <h2 className={styles.h2}>Featured Jobs</h2>
    {filteredJobs.map((job) => (
      <div key={job.id} className={styles.jobItem}>
        {editingJobId === job.id ? (
          // Edit mode
          <div>
            <input
              className={styles.inputField}
              value={editedJob.jobTitle || ''}
              onChange={(e) => handleChange(e, 'jobTitle')}
            />
            {/* Add similar inputs for other fields like companyName, employment, location, salary, and description */}
            <button className={styles.saveButton} onClick={handleSaveClick}>
              Save
            </button>
          </div>
        ) : (
          // Display mode
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
              {/* Display other job fields */}
            </div>
            <p className={styles.jobDescription}>{job.description}</p>
          </div>
        )}
      </div>
    ))}
  </div>
);
}