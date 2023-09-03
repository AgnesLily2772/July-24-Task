import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddEmployee = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    avatar: Yup.string().required('URL is required').url('Invalid URL format'),
    gender: Yup.string().required('Gender is required'),
    dateOfBirth: Yup.date().required('Date of Birth is required'),
    nationality: Yup.string().required('Nationality is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    jobTitle: Yup.string().required('Job Title is required'),
    jobType: Yup.string().required('Job Type is required'),
    manager: Yup.string().required('Manager is required'),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      avatar: '',
      gender: '',
      dateOfBirth: '',
      nationality: '',
      email: '',
      phone: '',
      jobTitle: '',
      jobType: '',
      manager: '',
    },
    enableReinitialize:true,
    validationSchema,
    onSubmit: (values) => handleSubmit(values)
  });

  const navigate = useNavigate()
  const handleSubmit = async(values) => {
      await axios.post(`https://64f1d2580e1e60602d24529b.mockapi.io/api/employees/`,values)
      .then(() => console.log("success"))
      console.log(values)
      navigate("/")
  }
  return (
    <div className='form-component'>
    <form onSubmit={formik.handleSubmit}>
        <h3 className='text-center mb-3'>Add Employee</h3>
  
      <div className='row'>
      <div className="mb-1 col">
          <label htmlFor="name" className="form-label">Name</label>
          <input  type="text"  className="form-control"  id="name"  placeholder="..."  name="name"  onChange={formik.handleChange} />
          {formik.touched.name && formik.errors.name?<span style={{"color":"red"}}>{formik.errors.name}</span>:<></>}        
        </div>

        <div className="mb-1 col">
          <label htmlFor="avatar" className="form-label">Avatar URL</label>
          <input type="text" className="form-control" id="avatar" placeholder="..." name="avatar" onChange={formik.handleChange} />
          {formik.touched.avatar && formik.errors.avatar?<span style={{"color":"red"}}>{formik.errors.avatar}</span>:<></>}        
        </div>
      </div>

      <div className='row'>
      <div className="mb-1 col">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select name="gender" onChange={formik.handleChange}  className="form-select" aria-label="Default select example">
          <option defaultValue="">Select from the below options</option>
  <option className='option' value="Male">Male</option>
  <option className='option' value="Female">Female</option>
          </select>
          {formik.touched.gender && formik.errors.gender?<span style={{"color":"red"}}>{formik.errors.gender}</span>:<></>}        

        </div>

        <div className="mb-1 col">
          <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
          <input type="date" className="form-control" id="dateOfBirth" placeholder="..." name="dateOfBirth" onChange={formik.handleChange} />
          {formik.touched.dateOfBirth && formik.errors.dateOfBirth?<span style={{"color":"red"}}>{formik.errors.dateOfBirth}</span>:<></>}        

        </div>

        <div className="mb-1 col">
          <label htmlFor="nationality" className="form-label">Nationality</label>
          <input type="text" className="form-control" id="nationality" placeholder="..." name="nationality" onChange={formik.handleChange} />
          {formik.touched.nationality && formik.errors.nationality?<span style={{"color":"red"}}>{formik.errors.nationality}</span>:<></>}        

        </div>
      </div>

      <div className='row'>
      <div className="mb-1 col">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="..."  name="email" onChange={formik.handleChange} />
          {formik.touched.email && formik.errors.email?<span style={{"color":"red"}}>{formik.errors.email}</span>:<></>}        

        </div>

        <div className="mb-1 col">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="text" className="form-control" id="phone"placeholder="..." name="phone" onChange={formik.handleChange} />
          {formik.touched.phone && formik.errors.phone?<span style={{"color":"red"}}>{formik.errors.phone}</span>:<></>}        

        </div>
      </div>

      <div className='row'>
      <div className="mb-1 col">
          <label htmlFor="jobTitle" className="form-label">Job Title</label>
          <input type="text" className="form-control" id="jobTitle" placeholder="..."name="jobTitle" onChange={formik.handleChange} />
          {formik.touched.jobTitle && formik.errors.jobTitle?<span style={{"color":"red"}}>{formik.errors.jobTitle}</span>:<></>}        
        </div>

        <div className="mb-1 col">
          <label htmlFor="jobType" className="form-label">Job Type</label>
          <input type="text" className="form-control" id="jobType" placeholder="..." name="jobType" onChange={formik.handleChange} />
          {formik.touched.jobType && formik.errors.jobType?<span style={{"color":"red"}}>{formik.errors.jobType}</span>:<></>}        
        </div>
      </div>

        <div className="mb-1">
          <label htmlFor="manager" className="form-label">Manager</label>
          <select  name="manager" onChange={formik.handleChange} className="form-select" aria-label="Default select example">
          <option  defaultValue="">Select from the below options</option>
          <option className='option' value="John Steve">John Steve</option>
          <option className='option' value="Chris Matt">Chris Matt</option>
          <option className='option' value="Jordan Matthew">Jordan Matthew</option>
          {formik.touched.manager && formik.errors.manager?<span style={{"color":"red"}}>{formik.errors.manager}</span>:<></>}        

          </select>
        </div>
        <button type="submit" className="mt-3 submit-btn w-100">Submit</button>
      </form>

    </div>
  )
}

export default AddEmployee