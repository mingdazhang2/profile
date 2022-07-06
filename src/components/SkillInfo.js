import React, {Component} from 'react';
//import { ProgressBar } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import  { useState } from 'react';
function SkillInfo (props){

  const [profile, setProfile]= useState(props.profile)
  
  return(
    <>
    <div className ="row">
      <h5>IT Skills</h5>
      
      <div className= "col-md-6">     
        <h6>Front-end</h6>
        <ul>
          {profile.person.IT_skills.front_end.map((item) => 
            {
              return (
              
              <li key={item.id} className = "">
                {item.text}
              </li> 
              )
            })
          }
        </ul>
        <h6>Back-end</h6>
        <ul>
          {profile.person.IT_skills.back_end.map((item) => 
            {
              return (
              
              <li key={item.id} className = "">
                {item.text}
              </li> 
              )
            })
          }
        </ul>
      </div>
      <div className= "col-md-6">
        <div className ="row">
          {profile.person.skills.map((skill, key) => 
            {
              return (
              
              <div key={skill.key} className = "col-lg-6">
                <label>{skill.key}</label>
                <RangeSlider variant='dark' tooltip='auto' tooltipLabel={currentValue => `${currentValue}%`} value={skill.value}  className="mb-3"/>  
              </div> 
              )
            })
          }
        </div>
      </div>
    </div>  
    <hr/>
    <div className ="row otherSkillsSection">
      <h5 >Time Management</h5>
      <div className= "col-md-12">
        {profile.person.time_management_skills}
      </div>
      <h5 className="mt-3">Energy & Enthusiasm</h5>
      <div className= "col-md-12">
        {profile.person.energy_enthusiasm}
      </div>
      <h5 className="mt-3">Problem Solving</h5>
      <div className= "col-md-12">
        {profile.person.problem_solving}
      </div>
    </div> 
    </>
  )
}
export default SkillInfo