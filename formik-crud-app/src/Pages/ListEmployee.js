import React, { useEffect, useState } from 'react'
import axios from "axios"
import {  useNavigate } from 'react-router-dom'
import Loader from "../Assets/download.gif"

const ListEmployee = () => {
  const [load,setLoad] = useState(true)
  const [data,setData] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    async function fetchData() {
      await axios.get(`https://64f1d2580e1e60602d24529b.mockapi.io/api/employees`)
      .then((info) => {
        setData(info.data)
        setLoad(false)})
    }
    fetchData()
  },[])
  const handleDelete = async(id) => {
    await axios.delete( `https://64f1d2580e1e60602d24529b.mockapi.io/api/employees/${id}`)
    setData((data) => {return data.filter((i) => i.id !==id)})
    navigate('/')
  }
  return (
    <>
    {load ? 
          <div className='loader'><img src={Loader} alt='Loading...'/></div>
:
      <div className='content'>
            {data && data.map((emp,i) => 
            <div key={i} className='emp'>
                <div className="card-header"></div>
                <div className='emp-card p-2 d-flex justify-content-between'>
                <div className='emp-details d-flex'>
                  <img className='m-3' src={emp.avatar} alt={`${emp.nane}Profile`}/>
                  <div className='justify-content-center align-items-center mt-2'>
                      <h3>{emp.name}</h3>
                      <p>{"E000"+emp.id}</p>
                      <div className='d-block'>
                    <button className='btn btn-success m-2' onClick={() => navigate(`/viewEmployee/${emp.id}`)}>View</button>  
                    <button className='btn btn-primary m-2' onClick={() => navigate(`/editEmployee/${emp.id}`)}>Edit</button>
                    <button className='btn btn-secondary m-2' onClick={() => handleDelete(emp.id)}>Delete</button>
                </div>
                  </div>

                </div>
                </div>
            </div>
            )}
      </div>}
    </>
  )
}

export default ListEmployee