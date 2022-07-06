import React, {Component} from 'react';
import { Chrono } from "react-chrono";
import  { useState } from 'react';
function WorkInfo (props){

  const [profile, setProfile]= useState(props.profile)
  const items = [{
    title: "May 1940",
    cardTitle: "Dunkirk",
    url: "http://www.history.com",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  }];
  const historyItems =profile.person.workHistory.map((item)=>{
    return  {
      "title":item.start +" to "+ item.end,
      "cardTitle": item.company +"- "+ item.title +" (" + item.type +")",
      "cardSubtitle": item.location,
      "cardDetailedText": item.duties.map((duty)=>{
        return duty.text ;
      }),
    }
  })
  return(

      
      
      <div className= "col-lg-8"> 
      <h4 className="mb-4 bold">Work History</h4>  
      <div style={{ width: "100%", height: "100%" }}>
      <Chrono 
        mode="VERTICAL"
        items={historyItems}  
        useReadMore = {false}
        slideShow = {false}
        flipLayout ={false}
        hideControls = {true}
        itemWidth ="250"
        fontSizes ={{
          cardSubtitle: '0.9rem',
          cardText: '1rem',
          cardTitle: '1rem',
          title: '0.9rem',
        }}
        cardPositionHorizontal = "TOP"
        theme={{
                primary: '#7b8a8b',
                secondary: '#3c4c5d',
                cardBgColor: '#ECF0F1',
                cardForeColor: 'black',
                titleColor: 'black',
                titleColorActive: 'white',
              }}
        />
    </div>
        <div className="d-none">
          {profile.person.workHistory.map((item) => 
            {
              return (
              
              <div key={item.start} className = "">
                <div className="bold">{item.company} - {item.title} ({item.type})</div>
                <div className="italic mb-2">{item.location}. From: {item.start} to {item.end}</div>
                <ul className="mb-3">
                  {item.duties.map((duty)=>{return (
                    <li key={duty.id}>{duty.text}</li>
                  )})}
                </ul>
              </div> 
              )
            })
          }
        </div>
     
      </div>

  )
}
export default WorkInfo