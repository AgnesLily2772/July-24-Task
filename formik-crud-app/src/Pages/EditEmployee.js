import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import Loader from "../Assets/download.gif"

const EditEmployee = () => {
  const [load,setLoad] = useState(true)
  const [emp,setEmp ] = useState({})

  const params = useParams()
  useEffect(()=>{
    async function fetchData(){
      await axios.get(`https://64f1d2580e1e60602d24529b.mockapi.io/api/employees/${params.id}`)
      .then((data) => setEmp(data.data))
      setLoad(false)
    }
    fetchData()
  },[params.id])

  const navigate = useNavigate()
  const handleSubmit = async(e) => {
      e.preventDefault()
      const updatedEmp = {name:emp.name,avatar:emp.avatar,gender:emp.gender,dateOfBirth:emp.dateOfBirth,nationality:emp.nationality,email:emp.email,phone:emp.phone,jobTitle:emp.jobTitle,jobType:emp.jobType,manager:emp.manager}
      console.log(updatedEmp)
      await axios.put(`https://64f1d2580e1e60602d24529b.mockapi.io/api/employees/${params.id}`,updatedEmp)
      .then(() => console.log("success"))
      navigate(`/viewEmployee/${params.id}`)

  }
  const handleInput = (e) => {
    setEmp({...emp,[e.target.name]:e.target.value})
  }
  return (
    <>
    {load ? 
      <div className='loader'><img alt='Loading...' src={Loader}/></div>:

    <div className='form-component'>
    <form onSubmit={handleSubmit}>
        <h3 className='text-center'>Edit Employee</h3>
  
        <div className="mb-1">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" defaultValue={emp.name} id="name" placeholder="..." name="name" onChange={handleInput} />
        </div>

        <div className="mb-1">
          <label htmlFor="avatar" className="form-label">Avatar URL</label>
          <input type="text" className="form-control" defaultValue={emp.avatar} id="avatar" placeholder="..." name="avatar" onChange={handleInput} />
        </div>

      <div className='row'>
      <div className="mb-1 col">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select name="gender" onChange={handleInput} defaultValue={emp.gender}  className="form-select" aria-label="Default select example">
          <option defaultValue="">Select from the below options</option>
  <option className='option' value="Male">Male</option>
  <option className='option' value="Female">Female</option>
          </select>
        </div>

        <div className="mb-1 col">
          <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
          <input type="date" className="form-control" defaultValue={emp.dateOfBirth} id="dateOfBirth" placeholder="..." name="dateOfBirth" onChange={handleInput} />
        </div>

        <div className="mb-1 col">
          <label htmlFor="nationality" className="form-label">Nationality</label>
          <input type="text" className="form-control" defaultValue={emp.nationality} id="nationality" placeholder="..." name="nationality" onChange={handleInput} />
        </div>
      </div>

      <div className='row'>
      <div className="mb-1 col">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" defaultValue={emp.email} id="email" placeholder="..."  name="email" onChange={handleInput} />
        </div>

        <div className="mb-1 col">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="text" className="form-control" defaultValue={emp.phone} id="phone"placeholder="..." name="phone" onChange={handleInput} />
        </div>
      </div>

      <div className='row'>
      <div className="mb-1 col">
          <label htmlFor="jobTitle" className="form-label">Job Title</label>
          <input type="text" className="form-control" defaultValue={emp.jobTitle} id="jobTitle" placeholder="..."name="jobTitle" onChange={handleInput} />
        </div>

        <div className="mb-1 col">
          <label htmlFor="jobType" className="form-label">Job Type</label>
          <input type="text" className="form-control" defaultValue={emp.jobType} id="jobType" placeholder="..." name="jobType" onChange={handleInput} />
        </div>
      </div>

        <div className="mb-1">
          <label htmlFor="manager" className="form-label">Manager</label>
          <select  name="manager" onChange={handleInput} defaultValue={emp.manager} className="form-select" aria-label="Default select example">
          <option >Select from the below options</option>
          <option className='option' value="John Steve">John Steve</option>
          <option className='option' value="Chris Matt">Chris Matt</option>
          <option className='option' value="Jordan Matthew">Jordan Matthew</option>
          </select>
        </div>
        <button type="submit" className="mt-3 submit-btn w-100">Submit</button>
      </form>

    </div>
    }
    </>
  )
}

export default EditEmployee