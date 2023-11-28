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
              <button className={styles.editButton} onClick={() => console.log('Make Edit Do Something')}>Edit</button>
              <button className={styles.deleteButton} onClick={() => deleteJob(index)}>Delete</button>
            </div>
            <p className={styles.jobDescription}>{job.description}</p>
          </div>
        ))
      }
    </div>
  );
}
