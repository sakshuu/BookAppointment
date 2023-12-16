import React from 'react'
import CurrentDateDisplay from './CurrentDateDisplay';
import "./../assets/css/cards.css"

const ChooseDate = () => {
 
  return  <>
  <div className='choose-date small'>
    <h6 className='bold mb-2 mt-4'>Choose Time</h6>
    <CurrentDateDisplay/>
    <div className='mt-3'>
    <h6 className='bold mb-1'>Choose Time</h6>
      <hr />
    <p className='small mb-1 mt-2'>Morning</p>
    <div className='d-flex justify-content-between'>
    <button type="button" class="btn p-1 btn-main px-2 bold small">10:00 AM</button>
    <button type="button" class="btn p-1 btn-main px-2 bold small">10:00 AM</button>
    <button type="button" class="btn p-1 btn-main px-2 bold small">10:00 AM</button>
    <button type="button" class="btn p-1 btn-main px-2 bold small">10:00 AM</button>
    </div>
    </div>
    <div className='mt-3'>
    <p className='small mb-1'>Afternoon</p>
    <div className='d-flex gap-3'>
    <button type="button" class="btn p-1 btn-main px-2 bold small">10:00 AM</button>
    <button type="button" class="btn p-1 btn-main px-2 bold small">10:00 AM</button>
    <button type="button" class="btn p-1 btn-main px-2 bold small">10:00 AM</button>
    </div>
    </div>
    <div className='mt-3'>
    <p className='small mb-1'>Evening</p>
    <div className='d-flex gap-3'>
    <button type="button" class="btn p-1 btn-main px-2 bold small">10:00 AM</button>
    <button type="button" class="btn p-1 btn-main px-2 bold small">10:00 AM</button>
    <button type="button" class="btn p-1 btn-main px-2 bold small">10:00 AM</button>
    </div>
    </div>
    <button type="button" class="btn mt-4 btn-primary px-4 p-1 small" data-bs-toggle="modal" data-bs-target="#exampleModal">Comfirm</button>
  </div>





  
  <div class="modal fade p-4" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content p-4">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary p-1" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary p-1">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  
  </>
}

export default ChooseDate