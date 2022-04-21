import React, { Component } from 'react'
import  "../cards.css";
import {Link} from 'react-router-dom';
// import image from '../blur-bowl-cook-461326.jpg';
import card1_image from "../meal_pics/yam and egg.jpg";
import card2_image from "../meal_pics/pounded yam.jpg";
import card3_image from "../meal_pics/fufu.jpeg";

export class Cardsection extends Component {
    render() {
        return (
            <div>
                <section className="meals_container">
                    <div className="meal_category meal_card card_section_1">
                        <img src={card1_image} alt='African meals' className='card_image'></img>
                        <div className='meal_info'>
                            Meal information goes here, meal information goes here meal information goes here
                            meal information goes heremeal information goes heremeal information goes heremeal information goes here

                            <br></br><br></br>
                                <Link to="/placeorder" className="meal_info_links"> Order </Link>
                            
                        </div>
                    </div>

                    <div className="meal_category meal_card card_section_2">
                    <img src={card2_image} alt='African meals' className='card_image'></img>
                        <div className='meal_info'>
                            meal information goes here, meal information goes here meal information goes here
                            meal information goes heremeal information goes heremeal information goes heremeal information goes here
                            
                            <br></br> <br></br><Link to="/placeorder" className="meal_info_links"> Order </Link>
                        </div>
                    </div>
                    <div className="meal_category meal_card card_section_3">
                    <img src={card3_image} alt='African meals' className='card_image'></img>
                        <div className='meal_info'>
                            meal information goes here, meal information goes here meal information goes here
                            meal information goes heremeal information goes heremeal information goes heremeal information goes here
                            
                            <br></br> <br></br><Link to="/placeorder" className="meal_info_links"> Order </Link>
                        </div>
                    </div>
                </section> 
            </div>
        )
    }
}

export default Cardsection
