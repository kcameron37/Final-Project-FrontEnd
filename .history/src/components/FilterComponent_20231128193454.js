import React from 'react';
import { useNavigate } from 'react-router-dom';

function FilterComponent({ jobs }) {
    const navigate = useNavigate();

    const uniqueLocations = getUniqueValues(jobs, 'location');
    const uniqueJobTitles = getUniqueValues(jobs, 'jobTitle');
  
    const handleFilterChange = (filterType, value) => {
      if (value === "") {
        navigate(`/`); 
      } else {
        navigate(`/filter/${filterType}/${value}`);
      }
    };

  if (jobs.length === 0) {
    return <p>No Jobs Available</p>;
  }

  return (
    <div>
      <div>
        <label>Location:</label>
        <select onChange={(e) => handleFilterChange('location', e.target.value)}>
          <option value="">All Locations</option> 
          {uniqueLocations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Job Title:</label>
        <select onChange={(e) => handleFilterChange('jobTitle', e.target.value)}>
          <option value="">All Job Titles</option> 
          {uniqueJobTitles.map(title => (
            <option key={title} value={title}>{title}</option>
          ))}
        </select>
      </div>

      {/* Add more dropdowns for other categories... */}
    </div>
  );
}

export default FilterComponent;

function getUniqueValues(jobs, key) {
  const unique = [...new Set(jobs.map(job => job[key]))];
  return unique;
}
