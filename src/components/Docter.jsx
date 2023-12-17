import React from 'react'
import "./../assets/css/cards.css"

const Docter = ({selectedDoctor}) => {
  
  return <>
  <div className="mt-4 mb-3">
  <h6 className='bold mb-2'>Docter</h6>
  { selectedDoctor && (
   <div class="p-2 shadow bg-body rounded">
<div className='d-flex gap-2'>

    <img src={selectedDoctor.pics} width={55} height={60} className='rounded-3' alt="" />

  <div className=''>
    <h6 className='bold small'>{selectedDoctor.name}</h6>
    <div className='para'>
    <p className='small'>{selectedDoctor.specialty}</p>
    <p className='small'>MCI No. {selectedDoctor.mvl}</p>
    </div>
  </div>
</div>
<hr className='lines' />
  <div className='d-flex justify-content-between gap-2'>
<div>
  <div className='d-flex gap-1  align-items-center'>
  <div>
    <i class="bi bi-alarm icon-circle"></i></div>
  <div className='para'>
  <h6 className='bold small small'>Duration</h6>
  <p className='small'>{selectedDoctor.durationtime}</p>
  </div>
  </div>
</div>
<div>
  <div className='d-flex gap-1  align-items-center'>
  <div><i class="bi bi-currency-rupee icon-circle"></i></div>
  <div className='para'>
  <h6 className='bold small small'>Fee</h6>
  <p className='small'>{selectedDoctor.fees}</p>
  </div>
  </div>
</div>
  </div>
<hr className='lines'/>
<div className='mt-2'>
  <div className='gap-2 mb-2 d-flex align-items-center'>

  <div>
    <i class="bi bi-mortarboard-fill icon-circle"></i>
    </div>
  <div className='para'>
  <h6 className='bold small'>Education</h6>
  <p className='small'>{selectedDoctor.education}</p>
  </div>
  </div>
  <div className='gap-2 mb-2 d-flex align-items-center'>

  <div>
    <i class="bi bi-geo-alt-fill icon-circle"></i>
    </div>
  <div className='para'>
  <h6 className='bold small'>Location</h6>
  <p className='small'>{selectedDoctor.location}</p>
  </div>
  </div>
  <div className='gap-2 mb-2 d-flex align-items-center'>

  <div>
  <i class="bi bi-person-fill icon-circle"></i>
    </div>
  <div className='para'>
  <h6 className='bold small'>About</h6>
  <p className='small'>{selectedDoctor.about}</p>
  </div>
  </div>
  </div>
</div>
)}
</div>
  </>
}

export default Docter