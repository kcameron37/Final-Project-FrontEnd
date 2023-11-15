/* jobList.module.css */

.jobItem {
  background-color: #ffffff; /* Assuming a white background */
  border-radius: 8px; /* Rounded corners for the card */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* A subtle shadow for depth */
  padding: 20px; /* Padding inside the card */
  margin-bottom: 20px; /* Space between each job listing card */
  border: 1px solid #e0e0e0; /* Light border for the card */
}

.jobTitle {
  font-size: 24px; /* Large font size for the job title */
  color: #333; /* Dark color for text */
  margin-bottom: 5px; /* Space after the job title */
}

.companyInfo {
  display: flex;
  justify-content: space-between; /* Space out the info and the buttons */
  align-items: center;
  margin-bottom: 10px; /* Space after the company info */
}

.companyInfo span {
  font-size: 14px; /* Smaller font size for company info */
  color: #666; /* Grey color for the company info */
  margin-right: 10px; /* Space between items if they wrap */
}

.editButton,
.deleteButton {
  padding: 8px 16px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 12px; /* Smaller font size for button text */
  margin-left: 8px; /* Space between buttons */
}

.editButton {
  background-color: #0078d4; /* Specific color for edit, a blue perhaps */
}

.deleteButton {
  background-color: #d83b01; /* Specific color for delete, a red perhaps */
}

.jobDescription {
  font-size: 16px; /* Readable font size for description */
  color: #333; /* Dark color for text */
  line-height: 1.5; /* For better readability */
}

/* The global box-sizing, font-family, and any reset styles should be applied */
*:not(html):not(body) {
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
}
