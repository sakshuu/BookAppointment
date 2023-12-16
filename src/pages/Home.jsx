import React from 'react'
import { SideNavbar } from '../components'
import Cards from './Cards'

const Home = () => {
  return <>
  <div className="row  main-container">
  <div className="col-md-2 col-1">
<SideNavbar/>
  </div>
  <div className="col-md-10 col-11">   
<Cards/> 
  </div>
  </div>
  </>
}

export default Home