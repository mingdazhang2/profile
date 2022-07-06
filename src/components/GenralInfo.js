import React, {Component} from 'react';
import  { useState, useEffect, useMemo } from 'react';
function GenralInfo (props){

  const [profile, setProfile]= useState(props.profile)
  //const data= ProfileData.filter((profile)=> {return profile.id===props.id })
  return(
    <div className ="row">
      <div className = "col-md-7">
         <div className="lead"> {profile.person.firstName} {profile.person.lastName} </div>
        <div>{profile.person.position}</div>
        <br/>
        <div>Age: {profile.person.age}</div>
        <div>Location: {profile.person.location}</div>
        <br/>
        <em>{profile.person.desc}<br/>{profile.person.goal}</em> 
      
      </div>
      <div className = "col-md-5">
      
        {/* <img src="" alt={data[0].person.firstName + ' ' +data[0].person.lastName} />   */}
      </div> 
    </div>   
  )
}
export default GenralInfo