'use client';
import { useState } from 'react';

export default function Contact() {
  const [enquiry, setEnquiry] = useState({
    username: '',
    email: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEnquiry((prevEnquiry) => ({
      ...prevEnquiry,
      [id]: value
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    const response = await fetch('http://localhost:3000/api/enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify content type
      },
      body: JSON.stringify(enquiry), // Convert the enquiry object to a JSON string
    });

    if (response.ok) {
      const data = await response.json(); // Handle the response if needed
      console.log('Enquiry submitted:', data);
      window.alert('Blog added');
    } else {
      console.error('Error submitting enquiry:', response.statusText);
    }
  };

  return (
    <main className="container mx-auto px-4 py-6">
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <form className="w-full max-w-lg" onSubmit={submitForm}>
        <div className="flex items-center mb-4">
          <label htmlFor="username" className="w-1/4">Name:</label>
          <input 
            type="text" 
            id="username" 
            onChange={handleChange} 
            className="border rounded px-2 py-1 w-3/4" 
            value={enquiry.username}
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="email" className="w-1/4">Email:</label>
          <input 
            type="email" 
            id="email" 
            onChange={handleChange} 
            className="border rounded px-2 py-1 w-3/4" 
            value={enquiry.email}
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="contact" className="w-1/4">Message:</label>
          <textarea 
            id="contact" 
            onChange={handleChange} 
            className="border rounded px-2 py-1 w-3/4" 
            rows="4" 
            value={enquiry.contact}
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
    </main>
  );
}
