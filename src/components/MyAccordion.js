import React, {Component} from 'react';
import { Accordion } from 'react-bootstrap';
import { faqsData } from "../faqsData";
export class MyAccordion extends Component{
    constructor(props){
        super(props);
        this.state={
            faqs:{}
        }}
    render(){
        return(
      <div className ="row">
         {faqsData.map((data, key) => {
           return (<div className='col-md-6'>
             <div className="lead mb-2">{data.cat}</div>
             <Accordion defaultActiveKey="0" className="mb-2">
                {data.faqs.map((data, key) => {
                  return (
                  
                    <Accordion.Item eventKey={key}>
                      <Accordion.Header>{data.question} </Accordion.Header>
                      <Accordion.Body>
                      {data.answer}
                      </Accordion.Body>
                    </Accordion.Item>

                  );
                })}
              </Accordion> 
               </div>
           )
         })}
          
      </div>   
     

        )
    }
}
export default MyAccordion;