import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from "../Assets/download.gif"
const ViewEmployee = () => {
  const [load,setLoad] = useState(true)
          const params = useParams()
          const [emp,setEmp] = useState({})
          useEffect(()=>{
            async function fetchData () {
              await axios.get(`https://64f1d2580e1e60602d24529b.mockapi.io/api/employees/${params.id}`)
              .then((data) => setEmp(data.data))
              setLoad(false)
            }
                    fetchData()
          },[params.id])
  return (
        <>
      {load ? 
      <div className='loader'><img src={Loader} alt='Loading...'/></div>
      :
            <div className='view-component row'>
          <img className='emp-img col col d-flex flex-column justify-content-between' alt={`${emp.nane}Profile`} src= {emp.avatar}/>
          <div className='d-flex flex-column align-content-center justify-content-center'>
                    <h2>{emp.name}</h2>
                    <p>Emp ID - {'E000'+emp.id}</p>
                    <p>Gender - {emp.gender}</p>
                    <p>DOB - {new Date(emp.dateOfBirth).toLocaleDateString()}</p>
                    <p>Age - {new Date().getFullYear() - new Date(emp.dateOfBirth).getFullYear()}</p>
                    <p>Nationality - {emp.nationality}</p>
                    <p>Email - {emp.email}</p>
                    <p>Phone - {emp.phone}</p>
                    <p>Job Title - {emp.jobTitle}</p>
                    <p>Job Type - {emp.jobType}</p>
                    <p>Manager - {emp.manager}</p>
          </div>
      </div>}
      </>
  )
}

export default ViewEmployee