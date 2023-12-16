import React from 'react'
import "./../assets/css/cards.css"
import { doctor } from '../assets/img'

const Docter = () => {
  const doctorData = {
    1: {
      name: "Dr. Brainy",
      specialty: "Neurologist",
      availableSlots: ["9:00 AM", "10:00 AM"],
    },
    2: {
      name: "Dr. Heartful",
      specialty: "Cardiologist",
      availableSlots: ["11:00 AM", "1:00 PM"],
    },
    3: {
      name: "Dr. Lungwise",
      specialty: "Pulmonologist",
      availableSlots: ["2:00 PM", "4:00 PM"],
    },
    4: {
      name: "Dr. KidneyCare",
      specialty: "Nephrologist",
      availableSlots: ["10:00 AM", "12:00 PM"],
    },
    5: {
      name: "Dr. EyeExpert",
      specialty: "Ophthalmologist",
      availableSlots: ["3:00 PM", "5:00 PM"],
    },
    6: {
      name: "Dr. SkinCare",
      specialty: "Dermatologist",
      availableSlots: ["11:00 AM", "2:00 PM"],
    },
    7: {
      name: "Dr. LiverDoc",
      specialty: "Hepatologist",
      availableSlots: ["1:00 PM", "3:00 PM"],
    },
    8: {
      name: "Dr. StomachHealer",
      specialty: "Gastroenterologist",
      availableSlots: ["10:00 AM", "11:30 AM"],
    },
    9: {
      name: "Dr. BoneDoctor",
      specialty: "Orthopedist",
      availableSlots: ["9:30 AM", "12:30 PM"],
    },
    10: {
      name: "Dr. MuscleTherapist",
      specialty: "Rheumatologist",
      availableSlots: ["2:30 PM", "4:30 PM"],
    },

  };

  return <>
  <div className="mt-4 mb-3">
  <h6 className='bold mb-2'>Docter</h6>
  <div class="p-2 shadow bg-body rounded">
<div className='d-flex gap-2'>

    <img src={doctor} width={55} height={60} className='rounded-3' alt="" />

  <div className=''>
    <h6 className='bold small'>Dr.Lakshmi K</h6>
    <div className='para'>
    <p className='small'>Psychiatrist</p>
    <p className='small'>MCI No. 12345</p>
    </div>
  </div>
</div>
<hr className='lines' />
{/* <div className="p-1"> */}
  <div className='d-flex justify-content-between gap-2'>
<div>
  <div className='d-flex gap-1  align-items-center'>
  <div>
    <i class="bi bi-alarm icon-circle"></i></div>
  <div className='para'>
  <h6 className='bold small small'>Duration</h6>
  <p className='small'>15 min</p>
  </div>
  </div>
</div>
<div>
  <div className='d-flex gap-1  align-items-center'>
  <div><i class="bi bi-currency-rupee icon-circle"></i></div>
  <div className='para'>
  <h6 className='bold small small'>Duration</h6>
  <p className='small'>15 min</p>
  </div>
  </div>
</div>
  </div>
{/* </div> */}
<hr className='lines'/>
<div className='mt-2'>
  <div className='gap-2 mb-2 d-flex align-items-center'>

  <div>
    <i class="bi bi-mortarboard-fill icon-circle"></i>
    </div>
  <div className='para'>
  <h6 className='bold small'>Duration</h6>
  <p className='small'>15 min</p>
  </div>
  </div>
  <div className='gap-2 mb-2 d-flex align-items-center'>

  <div>
    <i class="bi bi-geo-alt-fill icon-circle"></i>
    </div>
  <div className='para'>
  <h6 className='bold small'>Duration</h6>
  <p className='small'>15 min</p>
  </div>
  </div>
  <div className='gap-2 mb-2 d-flex align-items-center'>

  <div>
  <i class="bi bi-person-fill icon-circle"></i>
    </div>
  <div className='para'>
  <h6 className='bold small'>Duration</h6>
  <p className='small'>15 min</p>
  </div>
  </div>
  </div>
</div>
</div>
  </>
}

export default Docter