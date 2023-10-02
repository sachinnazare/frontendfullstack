import React, { useEffect, useState } from 'react';

export default function Student() {
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[students,setStudents]=useState([])

  const handleClick=(e)=>{
    e.preventDefault()
    const student={name,address}
    console.log(student)
    fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

  }).then(()=>{
    alert("New student added")
    console.log("New Student added")
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/student/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setStudents(result);
  }
)
},[])
  return (
    <div className="container-sm">
        <div className="card mt-5">
            <div className="card-body">
                <h2 style={{color: 'red', font_family:'Georgia, "Times New Roman", Times, serif'}}><u>Add Student</u></h2>
               <form>
                <div className="mb-3">
                  <label htmlFor="studentName" className="form-label">Student Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentName"
                    placeholder="Student Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="studentAddress" className="form-label">Student Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentAddress"
                    placeholder="Student Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
              </form>
            </div>
        </div>
        <h1 className="mt-5">Students</h1>
        <div className="card-body">
        <div className="card" style={{ margin: '10px', padding: '15px', textAlign: 'left', width: '18 rem'}}>
          {students.map((student) => (
            <div className="card" key={student.id}>
              <div className="card-body">
                <h5 className="card-title">Id: {student.id}</h5>
                <p className="card-text mb-2 text-body-secondary">Name: {student.name}</p>
                <p className="card-text mb-2 text-body-secondary">Address: {student.address}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  );
}