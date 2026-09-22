import { useState } from "react";
import {  useNavigate } from "react-router-dom";

export default function AddTeachers({ information, setInformation }) {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [specialization, setSpecialization] = useState('')
    const [department, setDepartment] = useState('')
    const [sex, setSex] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const newTeacher = {
            id: information.length + 1,
            name,
            specialization,
            department,
            sex,
        }
        setInformation([...information, newTeacher])
        navigate('/teacher')

        setName('')
        setSpecialization('')
        setDepartment('')
        setSex('')
    }
    return (
        <section className="add-teacher">
            <div className="add-teacher__card">
                <h2>Add Teacher</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="specialization">Specialization:</label>
                        <select
                            id="specialization"
                            value={specialization}
                            onChange={(e) => setSpecialization(e.target.value)}
                            required
                        >
                            <option value="">Select Specialization</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Software Development">Software Development</option>
                            <option value="Graphics Design">Graphics Design</option>
                            <option value="System Integration">System Integration</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Department:</label>
                        <select
                            id="department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            required
                        >
                            <option value="">Select Department</option>
                            <option value="DIT">DIT</option>
                            <option value="DIET">DIET</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="sex">Sex:</label>
                        <select
                            id="sex"
                            value={sex}
                            onChange={(e) => setSex(e.target.value)}
                            required
                        >
                            <option value="">Select Sex</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <button type="submit">Add Teacher</button>
                </form>
            </div>
        </section>
    )
}