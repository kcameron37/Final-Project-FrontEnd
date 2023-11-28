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

        <section class="container">
            <form class="form">
                <h1 class="form-title">Add Job</h1>

                <div class="form-row">
                    <label class="input-container">
                        <span htmlFor="company" class="input-label">
                            Company Name
                        </span>

                        <input
                            type="text"
                            id="company"
                            placeholder="Ex. SAP Inc Technologies"
                            class="text-input"
                        />
                    </label>

                    <label class="input-container">
                        <span htmlFor="job-title" class="input-label">
                            Job Title
                        </span>

                        <input
                            type="text"
                            id="job-title"
                            placeholder="Ex. Junior Frontend Web Developer"
                            class="text-input"
                        />
                    </label>
                </div>

                <div class="form-row">
                    <label class="input-container">
                        <span htmlFor="type" class="input-label">
                            Employment Type
                        </span>

                        <select
                            name="type"
                            id="type"
                            class="select-input"
                        >
                            <option value="full-time">Full Time</option>
                            <option value="part-time">Part Time</option>
                            <option value="contract">Contract</option>
                        </select>
                    </label>

                    <label class="input-container">
                        <span htmlFor="location" class="input-label">
                            Location
                        </span>

                        <input
                            type="text"
                            id="location"
                            placeholder="Ex. Vancouver, BC"
                            class="text-input"
                        />
                    </label>

                    <label class="input-container">
                        <span htmlFor="salary" class="input-label">
                            Job Title
                        </span>

                        <input
                            type="text"
                            id="salary"
                            placeholder="Ex. $3,500/month"
                            class="text-input"
                        />
                    </label>
                </div>

                <div class="form-row">
                    <label class="input-container">
                        <span htmlFor="job-description" class="input-label">
                            Job Description
                        </span>

                        <textarea
                            type="text"
                            id="job-description"
                            placeholder="Add description..."
                            class="textarea-input"
                        ></textarea>
                    </label>
                </div>
            </form>

            <figure class="image">
                <img src="/images/man.svg" alt="Logo" />
            </figure>
        </section>

    );
}