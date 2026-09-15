import { useState } from "react";

export default function AddStudents({ information, setInformation }) {
  const [name, setName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [course, setCourse] = useState("");
  const [yearSection, setYearSection] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: information.length + 1, 
      name: name,
      studentNumber: studentNumber,
      course: course,
      yearSection: yearSection,
      email: email,
      address: address
    }

    setInformation([...information, newStudent]);


    setName("");
    setStudentNumber("");
    setCourse("");
    setYearSection("");
    setEmail("");
    setAddress("");
  }

  return (
    <div>
      <h1>Add Student</h1>

      <input className="border border-gray-300"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name" />

      <input className="border border-gray-300"
        type="text"
        value={studentNumber}
        onChange={(e) => setStudentNumber(e.target.value)}
        placeholder="Enter Student Number" />

      <input className="border border-gray-300"
        type="text"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        placeholder="Enter Course" />

      <input className="border border-gray-300"
        type="text"
        value={yearSection}
        onChange={(e) => setYearSection(e.target.value)}
        placeholder="Enter Year & Section" />

      <input className="border border-gray-300"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email" />

      <input className="border border-gray-300"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter Address" />

      <button className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 rounded"
        onClick={handleSubmit}> Submit</button>
    </div>
  )
}