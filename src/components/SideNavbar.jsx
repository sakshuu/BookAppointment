import React from 'react'
import "./../assets/css/navbar.css"

const SideNavbar = () => {
  return <>
    <div class="sidebar  flex-nowrap small bold">
         <div class="d-flex flex-column align-items-center align-items-sm-start  pt-2 mt-4 text-white min-vh-100">
               <ul class="nav nav-pills flex-column  mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                 <li class="nav-item">
                     <a href="#" class="nav-link px-4 d-flex gap-3 align-items-baseline mx-2 align-middle  text-dark">
                         <i class="bi bi-dash-square text-start  font-icon"></i>
                         <span class="ms-1 d-none  d-sm-inline">Dashboard</span>
                     </a>
                 </li>
                 <li class="nav-item">
                     <a href="#" class="nav-link px-4 d-flex gap-3 align-items-baseline mx-2 align-middle  text-dark">
                         <i class="bi bi-calendar3 text-start font-icon"></i>
                         <span class="d-none  d-sm-inline">Appointmets</span>
                     </a>
                 </li>
                 <li class="nav-item">
                     <a href="#" class="nav-link px-4 d-flex gap-3 align-items-baseline mx-2 align-middle  text-dark">
                         <i class="bi bi-people-fill text-start  font-icon"></i>
                         <span class=" d-none  d-sm-inline">Patients</span>
                     </a>
                 </li>
                 <li class="nav-item">
                     <a href="#" class="nav-link px-4 d-flex gap-3 align-items-baseline mx-2 align-middle  text-dark">
                         <i class="bi bi-chat-dots-fill text-start font-icon"></i>
                         <span class="d-none  d-sm-inline">Messaging</span>
                     </a>
                 </li>
                 <li class="nav-item">
                     <a href="#" class="nav-link px-4 d-flex gap-3 align-items-baseline mx-2 align-middle  text-dark">
                         <i class="bi bi-person-lines-fill text-start  font-icon"></i>
                         <span class="d-none  d-sm-inline">Profile</span>
                     </a>
                 </li>
              






             </ul>

             <ul class="nav nav-pills flex-column main-nav mb-sm-auto align-items-center align-items-sm-start" id="menu">
                 <li class="nav-item">
                     <a href="#" class="nav-link px-4 d-flex gap-2 align-items-baseline mx-2 align-middle  text-dark">
                         <i class="bi bi-gear-fill font-icon"></i>
                         <span class="ms-1 d-none  d-sm-inline">Settings</span>
                     </a>
                 </li>
                 <li class="nav-item">
                     <a href="#" class="nav-link px-4 d-flex gap-2 align-items-baseline mx-2 align-middle  text-dark">
                         <i class="bi bi-box-arrow-right font-icon"></i>
                         <span class="ms-1 d-none  d-sm-inline">Logout</span>
                     </a>
                 </li>
            

             </ul>
         </div>
     </div>
  </>
}

export default SideNavbar