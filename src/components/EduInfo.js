import React, {Component} from 'react';
import { Chrono } from "react-chrono";
import  { useState } from 'react';
function EduInfo (props){

  const [profile, setProfile]= useState(props.profile)
  const historyItems =profile.person.eduHistory.map((item)=>{
    return  {
      "title":item.start +" to "+ item.end,
      "cardTitle": item.qualification ,
      "cardSubtitle": "",
      "cardDetailedText": [item.institute, item.location],
    }
  })
  return(

      
      
      <div className= "col-lg-4"> 
        <h4 className="mb-4 bold">Qualifications</h4> 
       
                
        <div className="">
          {profile.person.eduHistory.map((item) => 
            {
              return (             
              <div key={item.start} className = "card text-white bg-primary mb-3">
                <div className="card-header ">{item.qualification}</div>
                <div className="card-body ">
                  <div className="card-title">{item.institute} - {item.location}</div>
                  <p className="card-text">From: {item.start} to {item.end}</p>
                </div>
              </div> 
              )
            })
          }
        </div>
     
      </div>

  )
}
export default EduInfo