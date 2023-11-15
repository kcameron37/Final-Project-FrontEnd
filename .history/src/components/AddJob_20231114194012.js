import React, { useState } from 'react';

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
    };

    const handleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Job</h2>
            <label htmlFor="companyName">Company Name</label>
            <input
                type="text"
                name="companyName"
                value={job.companyName}
                onChange={handleChange}
                placeholder="Company Name"
            />
            <label htmlFor="jobTitle">Job Title</label>
            <input
                type="text"
                name="jobTitle"
                value={job.jobTitle}
                onChange={handleChange}
                placeholder="Job Title"
            />
            <label htmlFor="employment">Employment Type</label>
            <select name="employment" value={job.employment} onChange={handleChange}>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
            </select>
            <label htmlFor="location">Location</label>
            <input
                type="text"
                name="location"
                value={job.location}
                onChange={handleChange}
                placeholder="Location"
            />
            <label htmlFor="salary">Salary</label>
            <input
                type="text"
                name="salary"
                value={job.salary}
                onChange={handleChange}
                placeholder="Salary"
            />
            <label htmlFor="description">Job Description</label>
            <textarea
                name="description"
                value={job.description}
                onChange={handleChange}
                placeholder="Job Description"
            />
            <button type="submit">Add Job</button>
        </form>
    );
}
