import React, { useState } from "react";
import axios from "../services/apiMock";
import './StudentForm.css';

const StudentForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("/students", form).then(res => {
      alert("Student added!");
      setForm({ name: "", email: "", course: "" });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" required />
      <input name="course" value={form.course} onChange={handleChange} placeholder="Course" required />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
