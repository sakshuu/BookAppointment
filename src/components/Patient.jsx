import React from 'react'
import "./../assets/css/cards.css"

const Patient = ({selectedPatient}) => {

  

 
  return <>

{
  selectedPatient && (
<div className="main-patient  small">

<div>
  <div className='photo'>
  <img src={selectedPatient.img} width={65}  alt="" />
  </div>
  <h6 className='text-center mt-1'>{selectedPatient.name}</h6>



<div className='d-flex justify-content-center gap-4 mt-2 '>
  <div>
    <span className='bold'>Mr No:  </span><span>{selectedPatient.mrno}</span>
</div>
  <div><span className='bold'>Mr No:  </span><span>{selectedPatient.op}</span>
</div>
</div>
<div className='mt-2'><span className='bold'>Gender : </span><span>{selectedPatient.gender}</span>
</div>
<div><span className='bold'>Age : </span><span>{selectedPatient.age}</span>
</div>
<div><span className='bold'>Guardian : </span><span>{selectedPatient.guardian}</span>
</div>
<div><span className='bold'>Phone : </span><span>{selectedPatient.phone}</span>
</div>


<p className='mt-3 bold '>Last Consultation</p>
<p>{selectedPatient.lastConsultan}</p>
<p className='mt-3 bold'>Consultant</p>
<p>{selectedPatient.consultan}</p>
</div>
  </div>
  )
}
  
  </>
}

export default Patient