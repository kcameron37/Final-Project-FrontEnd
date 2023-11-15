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
        
        <form onSubmit={handleSubmit} className={styles.formContainer}>

            <h2>Add Job</h2>
            <div className={styles.form}>
                <div>
                    <label>Company Name</label>
                    <input
                        type="text"
                        name="companyName"
                        value={job.companyName}
                        onChange={handleChange}
                        placeholder="Ex.: SAP Inc Technology"
                    />

                    <label>Job Title</label>
                    <input
                        type="text"
                        name="jobTitle"
                        value={job.jobTitle}
                        onChange={handleChange}
                        placeholder="Ex.: Junior Frontend Web Developer"
                    />
                </div>

                <div>
                    <label>Employment Type</label>
                    <select name="employment" value={job.employment} onChange={handleChange}>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                    </select>

                    <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        value={job.location}
                        onChange={handleChange}
                        placeholder="Ex.: Vancouver, BC"
                    />

                    <label>Salary</label>
                    <input
                        type="text"
                        name="salary"
                        value={job.salary}
                        onChange={handleChange}
                        placeholder="Ex.: $3,500/month"
                    />
                </div>

                <div>
                    <label>Job Description</label>
                    <textarea
                        name="description"
                        value={job.description}
                        onChange={handleChange}
                        placeholder="Add description..."
                    />
                </div>
                <button type="submit">ADD JOB</button>

            </div>
            <div>
                <img src="/images/man.svg" alt="Logo" />
            </div>
        </form>
    );
}