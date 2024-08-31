import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

export default function Add() {
let navigate=useNavigate();

const[user,setUsers]=useState({
    name:"",
    username:"",
    email:""
})

const{name,username,email}=user;
const onInputChange=(e)=>{
    setUsers({...user,[e.target.name]:e.target.value})
}

const onSubmit=async(e)=>{
    e.preventDefault();
 await axios.post("http://localhost:8080/user",user);
    navigate("/");
}

  return (
    <form onSubmit={(e)=>onSubmit(e)}>
    <div className='container'>
      <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
        <h2 className='text-center m-4'>Register user</h2>
        <div className='mb-3'>
            <label htmlFor="Name" className='form-lable'>Name</label>
            <input type="text" className='form-control' placeholder='Enter your name' name='name' value={name}onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className='mb-3'>
            <label htmlFor="username" className='form-lable'>UserName</label>
            <input type="text" className='form-control' placeholder='Enter your Username' name='username'value={username} onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className='mb-3'>
            <label htmlFor="Email" className='form-lable'>Email</label>
            <input type='text' className='form-control' placeholder='Enter your Email' name='email' value={email} onChange={(e)=>onInputChange(e)}/>
        </div>
        <button type='submit' className='btn btn-outline-primary'>Submit</button>
        <Link className='btn btn-outline-danger mx-2 ' to="/">Cancel</Link>
      </div>
    </div>
    </form>
  )
}
