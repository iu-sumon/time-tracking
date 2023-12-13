import React, { useEffect, useState } from 'react';
import './Home.css'; // Import your CSS file

const Home = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    startTime: '',
    endTime: '',
    date: '',
    notes: '',
  });

  const [formDataArray, setFormDataArray] = useState([]);

  useEffect(() => {
    // Retrieve form data array from local storage
    const storedData = localStorage.getItem('formDataArray');
    if (storedData) {
      setFormDataArray(JSON.parse(storedData));
    }
  }, []);
  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleAddButtonClick = () => {
    // Retrieve existing form data array from local storage
    const existingFormDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];

    // Save form data in an array
    const newFormDataArray = [...existingFormDataArray, formData];

    // Save the updated array in local storage
    localStorage.setItem('formDataArray', JSON.stringify(newFormDataArray));

    // Update state to re-render the component
    setFormDataArray(newFormDataArray);

    // Clear the form data
    setFormData({
      startTime: '',
      endTime: '',
      date: '',
      notes: '',
    });
  };
  return (
    <div className="form-container">
      <label>
        Start Time:
        <input
          type="time"
          name="startTime"
          value={formData.startTime}
          onChange={handleInputChange}
        />
      </label>

      <label>
        End Time:
        <input
          type="time"
          name="endTime"
          value={formData.endTime}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Notes:
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
        />
      </label>

      <button onClick={handleAddButtonClick}>Add</button>
    </div>
  );
};

export default Home;
