import React from 'react';
import styles from '../styles/TrainResultPage.module.css';
import TrainResult from './TrainResult';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function TrainResultsPage(props) {
  const { trains, from, to, date } = props;
  const navigate = useNavigate();
  const train = [
    {
      id: 1,
      number: "1234",
      name: "Doronto Express",
      from: "Pune",
      to: "Mumbai",
      departureTime: "01:40 AM",
      departureDate: "05/08/2023",
      arrivalTime: "04:40 AM",
      arrivalDate: "05/08/2023",
      duration: "3 hours",
      price: "Rs 150",
    },
    {
      id: 2,
      number: "5678",
      name: "Shatabdi Express",
      from: "Pune",
      to: "Mumbai",
      departureTime: "12:40 AM",
      departureDate: "05/08/2023",
      arrivalTime: "03:40 AM",
      arrivalDate: "05/08/2023",
      duration: "3 hours",
      price: "Rs 160",
    },
    // add more trains here as needed
  ];
  
  return (
    <div className={styles.trainResultsPage}>
      <Navbar selected="stations"/>
      <div className={styles.searchBar}>
      <div className={styles.allTxt}>
          <TextField style={{marginRight:"20px",marginLeft:"20px"}} value={props.formDetails.source} InputProps={{readOnly: true,}} margin='dense' type='text' id="outlined-basic" label="Source" variant="outlined" />
          <TextField style={{marginRight:"20px"}} value={props.formDetails.destination} InputProps={{readOnly: true,}}  margin='dense' type='text' id="outlined-basic" label="Destination" variant="outlined" />
          <TextField style={{marginRight:"20px"}} value={props.formDetails.seatClass} InputProps={{readOnly: true,}}  margin='dense' type='text' id="outlined-basic" label="Seat Class" variant="outlined" />
          <TextField style={{marginRight:"20px"}} value={props.formDetails.quota} InputProps={{readOnly: true,}}  margin='dense' type='text' id="outlined-basic" label="Quota" variant="outlined" />
          <TextField style={{marginRight:"20px"}} value={props.formDetails.date} InputProps={{readOnly: true,}}  margin='dense' type='text' id="outlined-basic" label="Date" variant="outlined" />
        </div>           
        <div style={{fontFamily: "Poppins"}} onClick={()=>navigate("/home")} className={styles.butts}>Modify Search</div>
      </div>
      <div className={styles.outerContainer}>
      <div className={styles.trainList}>
        {train.map(train => (
          <TrainResult setFormDetails={props.setFormDetails} formDetails={props.formDetails} key={train.id} train={train} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default TrainResultsPage;
