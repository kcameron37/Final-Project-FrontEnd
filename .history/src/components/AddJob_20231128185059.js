import React, { useState } from "react";
import styles from "./addJob.module.css";

export default function AddJob({ addJob }) {
  const [job, setJob] = useState({
    companyName: "",
    jobTitle: "",
    employment: "Full Time",
    location: "",
    salary: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(job);
    setJob({
      companyName: "",
      jobTitle: "",
      employment: "Full Time",
      location: "",
      salary: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.form}>
        <h2 className={styles.formTitle}>Add Job</h2>

        <div className={styles.formRow}>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>Company Name</label>

            <input
              type="text"
              name="companyName"
              value={job.companyName}
              onChange={handleChange}
              placeholder="Ex.: SAP Inc Technology"
              className={styles.textInput}
            />
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>Job Title</label>

            <input
              type="text"
              name="jobTitle"
              value={job.jobTitle}
              onChange={handleChange}
              placeholder="Ex.: Junior Frontend Web Developer"
              className={styles.textInput}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>Employment Type</label>

            <select
              name="employment"
              value={job.employment}
              onChange={handleChange}
              className={styles.selectInput}
            >
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
            </select>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>Location</label>

            <input
              type="text"
              name="location"
              value={job.location}
              onChange={handleChange}
              placeholder="Ex.: Vancouver, BC"
              className={styles.textInput}
            />
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>Salary</label>

            <input
              type="text"
              name="salary"
              value={job.salary}
              onChange={handleChange}
              placeholder="Ex.: $3,500/month"
              className={styles.textInput}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>Job Description</label>

            <textarea
              name="description"
              value={job.description}
              onChange={handleChange}
              placeholder="Add description..."
              className={styles.textareaInput}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <button className={styles.button} type="submit">
            Add Job
          </button>
        </div>
      </div>

      <div className={styles.imageWrap}>
        <img className={styles.image} src="/images/man.svg" alt="Logo" />
      </div>
    </form>
  );
}
