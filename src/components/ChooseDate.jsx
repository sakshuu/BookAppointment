import React, { useRef, useState } from 'react'
import CurrentDateDisplay from './CurrentDateDisplay';
import "./../assets/css/cards.css"

const ChooseDate = ({selectedPatient, selectedDoctor }) => {

  const datePickerRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateSelection = (val) => {
    setSelectedDate(val);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleConfirmAppointment = () => {
    if (selectedDate && selectedTime) {
      console.log(`Confirmed appointment on ${selectedDate} at ${selectedTime}`);
    } else {
      console.log('Please select date and time');
    }
  };

  const morningTimes = ['10:00 AM', '10:30 AM', '11:00 AM', '11:45 AM'];
  const afternoonTimes = ['12:00 PM', '12:10 PM', '03:45 PM'];
  const eveningTimes = ['04:00 PM', '04:15 PM', '04:45 PM'];
 
  return  <>
  <div className='choose-date small'>
    <h6 className='bold mb-2 mt-4'>Choose Date</h6>
    <CurrentDateDisplay ref={datePickerRef} getSelectedDay={handleDateSelection} />

    <div className='mt-3'>
    <h6 className='bold mb-1'>Choose Time</h6>
      <hr />
    <p className='small mb-1 mt-2'>Morning</p>
    <div className='d-flex justify-content-between'>
    {morningTimes.map((time, index) => (
            <button
              key={index}
              type='button'
              className='btn p-1 btn-main px-2 bold small'
              onClick={() => handleTimeSelection(time)}
            >
              {time}
            </button>
          ))}
    </div>
    </div>
    <div className='mt-3'>
    <p className='small mb-1'>Afternoon</p>
    <div className='d-flex gap-3'>
    {afternoonTimes.map((time, index) => (
            <button
              key={index}
              type='button'
              className='btn p-1 btn-main px-2 bold small'
              onClick={() => handleTimeSelection(time)}
            >
              {time}
            </button>
          ))}
    </div>
    </div>
    <div className='mt-3'>
    <p className='small mb-1'>Evening</p>
    <div className='d-flex gap-3'>
    {eveningTimes.map((time, index) => (
            <button
              key={index}
              type='button'
              className='btn p-1 btn-main px-2 bold small'
              onClick={() => handleTimeSelection(time)}
            >
              {time}
            </button>
          ))}
    </div>
    </div>
    <button type="button" class="btn mt-4 btn-primary px-4 p-1 small" data-bs-toggle="modal" data-bs-target="#exampleModal"   onClick={handleConfirmAppointment}>Comfirm</button>
  </div>






   <div className="modal fade p-4" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content p-4">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel m-2">Appointment Confirmation</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-2">
              <p>Patient Name: {selectedPatient?.name}</p>
              <p>Doctor: {selectedDoctor?.name}</p>
              <p>Date: 18 dec 2023 {selectedDate}</p>
              <p>Time: {selectedTime}</p>
            </div>
            <div className="modal-footer d-flex gap-2">
              <button type="button" className="btn btn-secondary mt-2 p-1" data-bs-dismiss="modal">Close</button>{' '}
              <button type="button" className="btn btn-primary mt-2 p-1" data-bs-dismiss="modal">Confirm Appointment</button>
            </div>
          </div>
        </div>
      </div>
  
  </>
}

export default ChooseDate