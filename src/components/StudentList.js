import React, { useEffect, useState } from "react";
import axios from "../services/apiMock";
import './StudentList.css'

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("/students").then(res => setStudents(res.data));
  }, []);

  const filtered = filter
    ? students.filter(student => student.course === filter)
    : students;

  return (
    <div>
      <h2>Student List</h2>
      <select onChange={e => setFilter(e.target.value)} value={filter}>
        <option value="">All Courses</option>
        <option value="React">React</option>
        <option value="Node.js">Node.js</option>
      </select>
      <ul>
        {filtered.map(student => (
          <li key={student.id}>
            {student.name} - {student.email} ({student.course})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
