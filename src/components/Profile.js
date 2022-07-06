import React, {Component} from 'react';
import { ProfileData } from "../Data";
import  GenralInfo  from "./GenralInfo";
import  SkillInfo  from "./SkillInfo";
import  WorkInfo  from "./WorkInfo";
import  EduInfo  from "./EduInfo";

import  useJasonFilter from "../cusHooks/useJasonFilter";
function Profile (props){

  //const person= useJasonFilter(ProfileData,props.id)[0]
  const profile= ProfileData.filter((profile)=> {return profile.id===props.id })[0]

  return(
    <div className ="light-mode">
      <div className =" generalSection py-5">
        <div className="container">      
          <GenralInfo profile={profile}/>
          
        </div>
      </div>
     
      <div className="container py-5">
        <h4 className="mb-4 bold">
          Key Competences
        </h4>
        <SkillInfo profile={profile} />
       
      </div>
      <div className ="otherSkillsSection">
        <div className="container">  
           
          <div className ="row py-5">
        
          <WorkInfo profile={profile} />
          <EduInfo profile={profile} /> 
            
            
          </div>
          
        </div>
      </div>
    
  </div>
  )
}
export default Profile