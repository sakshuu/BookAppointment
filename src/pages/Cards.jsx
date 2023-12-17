import React, { useState } from 'react'
import "./../assets/css/cards.css"
import { ChooseDate, Docter, Patient } from '../components'
import { avatar, doctor } from '../assets/img'

const Cards = () => {

  const patientData = [
    {img:avatar,
     name: "Anir",
    condition: "Brain",
    gender:"male",
    age:"2", 
    phone:"56755456765",
    guardian:"Guardian name (Relation)",
    lastConsultan:"16:00 - 16:10Pm, 22,Dec 2023",
    consultan:"Dr.Amit singh(MRN)",
     mrno:"122345",
    op:"12345", doctorId:1, id: 1, },
    {img:avatar, name: "test", condition: "Heart", gender:"male", age:"2", phone:"56755456765", guardian:"Guardian name (Relation)", lastConsultan:"16:00 - 16:10Pm, 22,Dec 2023",consultan:"Dr.Amit singh(MRN)", mrno:"122345", op:"12345", doctorId:2, id: 2, },
    {img:avatar, name: "jay", condition: "Lungs", gender:"male", age:"2", phone:"56755456765", guardian:"Guardian name (Relation)", lastConsultan:"16:00 - 16:10Pm, 22,Dec 2023",consultan:"Dr.Amit singh(MRN)", mrno:"122345", op:"12345", doctorId:3, id: 3, },
    {img:avatar, name: "lara", condition: "Kidney", gender:"male", age:"2", phone:"56755456765", guardian:"Guardian name (Relation)", lastConsultan:"16:00 - 16:10Pm, 22,Dec 2023",consultan:"Dr.Amit singh(MRN)", mrno:"122345", op:"12345", doctorId:4, id: 4, },
    {img:avatar, name: "zoya", condition: "Eyes", gender:"male", age:"2", phone:"56755456765",   guardian:"Guardian name (Relation)", lastConsultan:"16:00 - 16:10Pm, 22,Dec 2023",consultan:"Dr.Amit singh(MRN)", mrno:"122345", op:"12345", doctorId:5, id: 5, },
    {img:avatar, name: "Alpha", condition: "Skin", gender:"male", age:"2", phone:"56755456765",  guardian:"Guardian name (Relation)", lastConsultan:"16:00 - 16:10Pm, 22,Dec 2023",consultan:"Dr.Amit singh(MRN)", mrno:"122345", op:"12345", doctorId:6, id: 6, },
    {img:avatar, name: "Olivia", condition: "Liver", gender:"male", age:"2", phone:"56755456765",guardian:"Guardian name (Relation)", lastConsultan:"16:00 - 16:10Pm, 22,Dec 2023",consultan:"Dr.Amit singh(MRN)", mrno:"122345", op:"12345", doctorId:7, id: 7, },
    {img:avatar, name: "Karan", condition: "Stomach", gender:"male", age:"2", phone:"56755456765", guardian:"Guardian name (Relation)", lastConsultan:"16:00 - 16:10Pm, 22,Dec 2023",consultan:"Dr.Amit singh(MRN)", mrno:"122345", op:"12345", doctorId:8, id: 8, },
    {img:avatar, name: "bela", condition: "Bones", gender:"male", age:"2", phone:"56755456765", guardian:"Guardian name (Relation)", lastConsultan:"16:00 - 16:10Pm, 22,Dec 2023",consultan:"Dr.Amit singh(MRN)", mrno:"122345", op:"12345", doctorId:9, id: 9, },
    {img:avatar, name: "aayesha", condition: "Muscles", gender:"male", age:"2", phone:"56755456765", guardian:"Guardian name (Relation)", lastConsultan:"16:00 - 16:10Pm, 22,Dec 2023",consultan:"Dr.Amit singh(MRN)", mrno:"122345", op:"12345", doctorId:10, id: 10, },
    // Add more patient data as needed
  ];

  const doctorData = {
    1: {
      name: "Dr. Brainy",
      specialty: "Neurologist",
      mvl:"12345",
      durationtime:"15 mins",
      fees:"Rs. 3000",
      education:"Psychiatric medication, MBBS",
      location:"Banjara Hills, Hyderabad",
      about:"Dr. Brainy is psychiatrist specialist at Asha Hospital in Hyderabad",
      pics:doctor,
      availableSlots: ["9:00 AM", "10:00 AM"],
      
    },
    2: {
      name: "Dr. Heartful",
      specialty: "Cardiologist",
      mvl:"12345",
      durationtime:"15 mins",
      fees:"Rs. 3000",
      education:"Psychiatric medication, MBBS",
      location:"Banjara Hills, Hyderabad",
      about:"Dr. Heartful is psychiatrist specialist at Asha Hospital in Hyderabad",
      pics:doctor,      
      availableSlots: ["11:00 AM", "1:00 PM"],
      
    },
    3: {
      name: "Dr. Lungwise",
      specialty: "Pulmonologist",
      mvl:"12345",
      durationtime:"15 mins",
      fees:"Rs. 3000",
      education:"Psychiatric medication, MBBS",
      location:"Banjara Hills, Hyderabad",
      about:"Dr. Lungwise is psychiatrist specialist at Asha Hospital in Hyderabad",
      pics:doctor,      
      availableSlots: ["2:00 PM", "4:00 PM"],
      id:3,
    },
    4: {
      name: "Dr. KidneyCare",
      specialty: "Nephrologist",
      mvl:"12345",
      durationtime:"15 mins",
      fees:"Rs. 3000",
      education:"Psychiatric medication, MBBS",
      location:"Banjara Hills, Hyderabad",
      about:"Dr. KidneyCare is psychiatrist specialist at Asha Hospital in Hyderabad",
      pics:doctor,      
      availableSlots: ["10:00 AM", "12:00 PM"],
      
    },
    5: {
      name: "Dr. EyeExpert",
      specialty: "Ophthalmologist",
      mvl:"12345",
      durationtime:"15 mins",
      fees:"Rs. 3000",
      education:"Psychiatric medication, MBBS",
      location:"Banjara Hills, Hyderabad",
      about:"Dr. EyeExpert is psychiatrist specialist at Asha Hospital in Hyderabad",
      pics:doctor,      
      availableSlots: ["3:00 PM", "5:00 PM"],
      
    },
    6: {
      name: "Dr. SkinCare",
      specialty: "Dermatologist",
      mvl:"12345",
      durationtime:"15 mins",
      fees:"Rs. 3000",
      education:"Psychiatric medication, MBBS",
      location:"Banjara Hills, Hyderabad",
      about:"Dr. SkinCare is psychiatrist specialist at Asha Hospital in Hyderabad",
      pics:doctor,      
      availableSlots: ["11:00 AM", "2:00 PM"],
      
    },
    7: {
      name: "Dr. LiverDoc",
      specialty: "Hepatologist",
      mvl:"12345",
      durationtime:"15 mins",
      fees:"Rs. 3000",
      education:"Psychiatric medication, MBBS",
      location:"Banjara Hills, Hyderabad",
      about:"Dr. LiverDoc is psychiatrist specialist at Asha Hospital in Hyderabad",
      pics:doctor,      
      availableSlots: ["1:00 PM", "3:00 PM"],
      
    },
    8: {
      name: "Dr. StomachHealer",
      specialty: "Gastroenterologist",
      mvl:"12345",
      durationtime:"15 mins",
      fees:"Rs. 3000",
      education:"Psychiatric medication, MBBS",
      location:"Banjara Hills, Hyderabad",
      about:"Dr. StomachHealer is psychiatrist specialist at Asha Hospital in Hyderabad",
      pics:doctor,      
      availableSlots: ["10:00 AM", "11:30 AM"],
    },
    9: {
      name: "Dr. BoneDoctor",
      specialty: "Orthopedist",
      mvl:"12345",
      durationtime:"15 mins",
      fees:"Rs. 3000",
      education:"Psychiatric medication, MBBS",
      location:"Banjara Hills, Hyderabad",
      about:"Dr. BoneDoctor is psychiatrist specialist at Asha Hospital in Hyderabad",
      pics:doctor,      
      availableSlots: ["9:30 AM", "12:30 PM"],
    },
    10: {
      name: "Dr. MuscleTherapist",
      specialty: "Rheumatologist",
      mvl:"12345",
      durationtime:"15 mins",
      fees:"Rs. 3000",
      education:"Psychiatric medication, MBBS",
      location:"Banjara Hills, Hyderabad",
      about:"Dr. MuscleTherapist is psychiatrist specialist at Asha Hospital in Hyderabad",
      pics:doctor,      
      availableSlots: ["2:30 PM", "4:30 PM"],
    },

  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  const filteredPatients = patientData.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
    setSearchTerm('');
  };
  
  const selectedDoctor = selectedPatient ? doctorData[selectedPatient.doctorId] : null;

  return <>
   <h5 className="heading my-2 bold">Book Appointment</h5>
  <div className="main-card lg-shadow bg-body rounded p-4">
    <div className="row">
      <div className='main-header'>
        <div className='search-container'>
        <i class="bi bi-search"></i>
          <input type="text"
           value={searchTerm}
                onChange={handleSearch}
                onFocus={() => setSearchTerm('')} 
          placeholder='Search Patient' className=' mt-2 search-inp small'/>
        </div>
        
        <div  className={`dropdown ${searchTerm.length > 0 ? 'show' : ''}`}>
    <button class="btn p-1 mt-1 btn-light dropdown-toggle"
     type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
     aria-expanded={searchTerm.length > 0 ? 'true' : 'false'}
     
     >
      Selected Patient name
    </button>
    
               <ul className={`dropdown-menu p-1 ${searchTerm.length > 0 ? 'show' : ''}`}>
                {filteredPatients.map((patient) => (
                  <li key={patient.id}>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelectPatient(patient)}
                    >
                      {patient.name}
                    </button>
                  </li>
                ))}
              </ul>
  </div>
        <div>

          <button type="button" class="btn px-5 p-1 btn-main mt-2">
          <i class="bi icons-card bi-person"></i> 
            Regular </button>{' '}

          <button type="button" class="btn px-5 p-1 btn-main mt-2">
            <i class="bi icons-card ali bi-person"></i>
             Inperson</button>{' '}
          <button type="button" class="btn px-5 p-1 btn-main mt-2">
          <i class="bi ali bi-person icons-card"></i> 
            Banjara Hills</button>
          </div>
      </div>

    <div className="col-md-3 col-sm-12 ">
<Patient selectedPatient={selectedPatient}/>
    </div>
    <div className="col-md-3  col-sm-12 mt-2 ">
<Docter selectedDoctor={selectedDoctor}/>
    </div>

    <div className="col-md-5 col-sm-11 mt-2">
      
      <ChooseDate selectedPatient={selectedPatient} selectedDoctor={selectedDoctor}/>
    </div>
    </div> 

    </div>
  </>
}

export default Cards