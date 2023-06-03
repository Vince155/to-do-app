"use client"

import { useState } from 'react';

export default function Page() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: ''
  });
  const minDate = new Date().toLocaleDateString('fr-ca');

  function handleInputChange(event) {
    const { name, value } = event.target;
    const newFormData = {
      ...formData,
      [name]: value
    }
    setFormData(newFormData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Title: ${formData.title}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" name='title' value={formData.title} onChange={handleInputChange}/>

        <label htmlFor="description">Description:</label>
        <textarea type="text" name='description' value={formData.description} onChange={handleInputChange}/>

        <label htmlFor="dueDate">Due Date:</label>
        <input type="date" min={minDate} name='date' onChange={handleInputChange}/>

        <button type="submit">Create</button>
      </form>
    </>
  );
}
