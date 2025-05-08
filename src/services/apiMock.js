import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, { delayResponse: 1000 });

let students = [
    { id: 1, name: "John Doe", email: "john@example.com", course: "React" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", course: "Node.js" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", course: "Python" },
    { id: 4, name: "Bob Williams", email: "bob@example.com", course: "React" },
    { id: 5, name: "Carol Lee", email: "carol@example.com", course: "Node.js" },
    { id: 6, name: "David Kim", email: "david@example.com", course: "Django" },
    { id: 7, name: "Eva Brown", email: "eva@example.com", course: "React" },
    { id: 8, name: "Frank Moore", email: "frank@example.com", course: "Node.js" },
];

mock.onGet("/students").reply(200, students);

mock.onPost("/students").reply(config => {
  const newStudent = JSON.parse(config.data);
  newStudent.id = students.length + 1;
  students.push(newStudent);
  return [201, newStudent];
});

export default axios;
