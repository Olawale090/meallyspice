import React, { Component } from 'react'
import '../footer.css';
import pinterest from '../icons/021-pinterest.png';
import facebook from '../icons/036-facebook.png';
import twitter from '../icons/008-twitter.png';
import whatsapp from '../icons/005-whatsapp.png';
import instagram from '../icons/029-instagram.png';

export class Footer extends Component {
    render() {
        return (
            <div>
                <section className="footer_container">
                
                    <div className="footer_content right_footer">

                        <li className="list_title"> Popular meals </li>
                        <li>African</li>
                        <li>Nigerian Swallow</li>
                        <li>Cappucino</li>
                        <li>Yam and Egg </li>
                        <li>Coffee</li>
                        <li>Coffee and Milk</li>
                        <li>Chineese meals</li>
                        <li>Chicken soup</li>
                        <li>Beef soup</li>
                        <li>White rice and stew</li>
                    

                    </div>
                    <div className="footer_content center_footer"> 

                        <li className="list_title">Special packages </li>
                        <li>Birthday buffet </li>
                        <li>Wedding reception and dinner </li>
                        <li>Annivesaries</li>
                        <li>Special achievements</li>
                        <li>Graduation</li>
                        <li>Surprise meals</li>
                        <li>
                            <img src={pinterest} alt="pinterest icon" className="social_media_pinterest"></img>
                            <img src={facebook} alt="pinterest icon" className="social_media_pinterest"></img>
                            <img src={twitter} alt="pinterest icon" className="social_media_pinterest"></img>
                            <img src={whatsapp} alt="pinterest icon" className="social_media_pinterest"></img>
                            <img src={instagram} alt="pinterest icon" className="social_media_pinterest"></img>
                        </li>

                        <li className="app_name">meallySpice</li>
                    
                    </div>
                    <div className="footer_content left_footer">

                        <li>
                            <input type='text' placeholder="Enter email for meals alert" className="meals_alert"></input> 
                            <button className="meal_alert_button"> Submit </button>
                        </li>

                        <li>Sign in </li>
                        <li>Sign up</li>
                        <li>Newsletter</li>

                        <li className="list_title feedback">  Customer feedback  </li>
                        <li>+2348168612448, +2348168612448 (USA)</li>
                        <li>+2348135177804, +2348168612448 (UK)</li>

                        <li className="list_title services_f"> Services </li>
                        <li> Home/Office delivery</li>
                        <li> Event/ceremonial meal delivery</li>
                        <li> Packaged meal </li>
                        <li> Order your meal your way </li>
                    
                    </div>

                </section>
            </div>
        )
    }
}

export default Footer
