import React, { useState } from 'react';
import styles from './addJob.module.css';


export default function AddJob({ addJob }) {

    const [job, setJob] = useState({
        companyName: '',
        jobTitle: '',
        employment: 'Full Time',
        location: '',
        salary: '',
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addJob(job);
        setJob({ companyName: '', jobTitle: '', employment: 'Full Time', location: '', salary: '', description: '' });
    }

    const handleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    return (
      /* Change font family in here */
* > * {
    box-sizing: border-box;
    font-family: sans-serif;
  }
  
  /* Just change the max-width so that it looks good */
  .container {
    display: flex;
    gap: 40px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;
  }
  
  .form-title {
    margin: 0;
  }
  
  .form-row {
    display: flex;
    width: 100%;
    gap: 16px;
  }
  
  .input-container {
    flex: 1;
  }
  
  .input-label {
    display: block;
    margin-bottom: 8px;
  }
  
  .text-input {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid black;
  }
  
  .select-input {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid black;
  }
  
  .textarea-input {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid black;
    resize: none;
    height: 120px;
  }  
        // <form onSubmit={handleSubmit} className={styles.formContainer}>
        //     <h2>Add Job</h2>
        //     <div className={styles.form}>
        //         <div>
        //             <label>Company Name</label>
        //             <input
        //                 type="text"
        //                 name="companyName"
        //                 value={job.companyName}
        //                 onChange={handleChange}
        //                 placeholder="Ex.: SAP Inc Technology"
        //             />

        //             <label>Job Title</label>
        //             <input
        //                 type="text"
        //                 name="jobTitle"
        //                 value={job.jobTitle}
        //                 onChange={handleChange}
        //                 placeholder="Ex.: Junior Frontend Web Developer"
        //             />
        //         </div>

        //         <div>
        //             <label>Employment Type</label>
        //             <select name="employment" value={job.employment} onChange={handleChange}>
        //                 <option value="Full Time">Full Time</option>
        //                 <option value="Part Time">Part Time</option>
        //             </select>

        //             <label>Location</label>
        //             <input
        //                 type="text"
        //                 name="location"
        //                 value={job.location}
        //                 onChange={handleChange}
        //                 placeholder="Ex.: Vancouver, BC"
        //             />

        //             <label>Salary</label>
        //             <input
        //                 type="text"
        //                 name="salary"
        //                 value={job.salary}
        //                 onChange={handleChange}
        //                 placeholder="Ex.: $3,500/month"
        //             />
        //         </div>

        //         <div>
        //             <label>Job Description</label>
        //             <textarea
        //                 name="description"
        //                 value={job.description}
        //                 onChange={handleChange}
        //                 placeholder="Add description..."
        //             />
        //         </div>
        //         <button type="submit">ADD JOB</button>

        //     </div>
        //     <div>
        //         <img src="/images/man.svg" alt="Logo" />
        //     </div>
        // </form>
    );
}