import { useState } from 'react';
import '../styles/surveyForm.css'

function SurveyForm() {
  const [formData, setFormData] = useState({ q1: '', q2: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/survey', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    setSubmitted(true);
  };

  return (
    <div style={{
      padding: 'var(--spacing-16)',
      border: '1px solid #ccc',
      borderRadius: 'var(--radius)',
      marginTop:'20px'
    }}>
      {submitted ? (
        <div>✅ Thanks! <progress value="85" max="100"></progress></div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label style={{color:'var(--color-primary)',}}>
            What do you think ‘Top 36’ means?
            <input
              type="text"
              required
              onChange={(e) => setFormData({ ...formData, q1: e.target.value })}
              className='surveyInput'
            />
          </label >
          <label style={{color:'var(--color-primary)'}}>
            Suggest a future prize:
            <input
              type="text"
              required
              onChange={(e) => setFormData({ ...formData, q2: e.target.value })}
             className='surveyInput' />
          </label>
          <button className='surveyButton' type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default SurveyForm;