import React from 'react'
import "./../assets/css/cards.css"
import { ChooseDate, Docter, Patient } from '../components'


const Cards = () => {
  return <>
   <h5 className="heading my-2 bold">Book Appointment</h5>
  <div className="main-card lg-shadow bg-body rounded p-4">
    <div className="row">
      <div className='main-header'>
        <div className='search-container'>
        <i class="bi bi-search"></i>
          <input type="text" placeholder='Search Patient' className=' mt-2 search-inp small'/>
        </div>
        
        <div class="dropdown">
    <button class="btn p-1 mt-1 btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
      Dropdown button
    </button>
    <ul class="dropdown-menu p-1">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
        <div>

          <button type="button" class="btn px-5 p-1 btn-main mt-2">
          <i class="bi icons-card bi-person"></i> 
            Primary </button>{' '}

          <button type="button" class="btn px-5 p-1 btn-main mt-2">
            <i class="bi icons-card ali bi-person"></i>
             Primary</button>{' '}
          <button type="button" class="btn px-5 p-1 btn-main mt-2">
          <i class="bi ali bi-person icons-card"></i> 

            Primary</button>
          </div>
      </div>

    <div className="col-md-3 col-sm-12 ">

      <Patient/>
    </div>

    <div className="col-md-3  col-sm-12 mt-2 ">
<Docter/>
    </div>

    <div className="col-md-5 offset-1 col-sm-11 mt-2">
      
      <ChooseDate/>
    </div>

    </div>
  </div>
  </>
}

export default Cards