import styles from '../styles/Done.module.css';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import train from '../assets/train.png';
import tmlogo from '../assets/logo.png';
import { useRef } from 'react';

const Done = (props) => {
    
    const pdfRef = useRef();

    const downloadPDF = () => {
        const inp = pdfRef.current;
        html2canvas(inp,{
            onclone:function (clonedDoc) {
                clonedDoc.getElementById('bye').style.display = 'block';
            }
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jspdf('p','mm','a4',true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth/imgWidth,pdfHeight/imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, "PNG",imgX,imgY,imgWidth*ratio,imgHeight*ratio);
            pdf.save('Ticket.pdf');
        })
    }
    // {

    //     PNR: 
    //     passenger_details : [ {
    //         name:
    //         age:
    //         gender:
    //         nationality:
    //         coach_code: 
    //         seat_number: 
            
    //         }]
            
        
    //     boarding_stop: {
        
    //         station_code: ,
    //         arrival_time ,
    //         stop_time,
    //     }
    
    //     exit_stop: {
        
    //         station_code: ,
    //         arrival_time ,
    //         stop_time,
    //     }
    return(
        <div>
            <div style={{fontSize:"36px",textAlign: "center",marginTop:"30px"}}>
                YOUR TICKETS HAVE BEEN SUCCESSFULLY BOOKED !
            </div>
            <div id='bye' ref={pdfRef} style={{display:'none'}}>
            <img style={{width:"100%",marginTop:"10px"}} src={train} alt='train'></img>
                <img style={{marginLeft:"20%",marginTop:"30px"}} src={tmlogo} alt='tmlogo'></img>
                <div style={{fontSize:"20px",marginLeft: "20%",marginTop:"30px"}}>
                    PNR: 217735810738
                </div>
                <div style={{fontSize:"20px",marginLeft: "20%",marginTop:"30px"}}>
                    Boarding Station Code: ytfuyir23dfsdf
                </div>
                <div style={{fontSize:"20px",marginLeft: "20%",marginTop:"30px"}}>
                    Exiting Station Code: KJFyfjgsajhgcyg
                </div>
                <div style={{fontSize:"20px",marginLeft: "20%",marginTop:"30px"}}>
                    Departure Time: {props.formDetails.departuretime}
                </div>
                <div style={{fontSize:"20px",marginLeft: "20%",marginTop:"30px"}}>
                    Arrival Time: {props.formDetails.arrivaltime}
                </div>
                <div style={{fontSize:"20px",marginLeft: "20%",marginTop:"30px"}}>
                    Passenger Count : {props.passengers.length}
                </div>
                {props.passengers.map((passenger,index) => {
                    return (
                        <div style={{fontSize:"20px",marginLeft: "20%",marginTop:"30px"}} key={index} >
                            Passenger {index+1} Name : {passenger.first_name} {passenger.last_name}
                        </div>
                    );
                })}
                <img style={{width:"100%",marginTop:"30px"}} src={train} alt='train'></img>
            </div>
            <div style={{fontSize:"20px",textAlign: "center",marginTop:"30px",marginBottom:"30px"}}>Download your ticket by pressing the button given <span style={{color:"#3626A7"}}>below</span> !</div>
            <button onClick={downloadPDF} className={styles.butts}>Download PDF</button>
        </div>
    );
}

export default Done;