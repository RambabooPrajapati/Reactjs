import React, { useState } from 'react';

const DateValidationForm = () => {
  const [date, setDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateDate = (date) => {
    // Example: Simple check to ensure a date is selected
    if (!date) {
      setErrorMessage('Date is required.');
    } else {
      setErrorMessage('');
    }
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    validateDate(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Date <span style={{ color: 'red' }}>*</span>:
        </label>
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          required
        />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default DateValidationForm;
