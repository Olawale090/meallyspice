import React, { Component } from 'react'
import "../solution.css";
import icon1 from '../icons/090-clock.svg';
import icon2 from '../icons/075-placeholder.svg';
import icon3 from '../icons/040-shield.svg';

export class Solution extends Component {
    render() {
        return (
            <div>
                <section className='operation_section'>
                    <div className="operation operation_one"> 
                        <img src={icon1} alt="iconify" className="clock_icon"></img>
                        <div className="operation_details"> We deliver all order in time and our operation spans through 7am to 11pm daily. </div> 
                    </div>

                    <div className="operation operation_two"> 
                        <img src={icon2} alt="iconify" className="clock_icon"></img>
                        <div className="operation_details"> Constant home and office delivery, with reliable and constant services that makes your day a memorable one.   </div> 
                    </div>

                    <div className="operation operation_three"> 
                        <img src={icon3} alt="iconify" className="clock_icon"></img>
                        <div className="operation_details">We protect your personal information from unauthrized personel by implementing all soccial legal system </div> 
                    </div>
                     
                </section>
            </div>
        )
    }
}

export default Solution
