import React from 'react'
import { Link } from 'react-router-dom'
import "./Button.css"
export const Button = () => {
  return (
    <div><Link to="/form"><button type="button" class="btn btn-success mt-5  " id='but'>Candidates details</button></Link></div>
  )
}
