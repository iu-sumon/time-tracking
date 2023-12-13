import React, { useState, useEffect } from 'react';
import './Entries.css';

const Entries = () => {
  const [formDataArray, setFormDataArray] = useState([]);

  useEffect(() => {
    // Retrieve form data array from local storage
    const storedData = localStorage.getItem('formDataArray');
    if (storedData) {
      setFormDataArray(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="card-container">
      {formDataArray.length > 0 ? (
        formDataArray.map((formData, index) => (
          <div key={index} className="card">
            <p>
              <strong>Start Time:</strong> {formData.startTime}
            </p>
            <p>
              <strong>End Time:</strong> {formData.endTime}
            </p>
            <p>
              <strong>Date:</strong> {formData.date}
            </p>
            <p>
              <strong>Notes:</strong> {formData.notes}
            </p>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Entries;
