import React, { Component } from 'react'
import "../foodcardsection.css";
import {Link} from 'react-router-dom';
// import image from '../blur-bowl-cook-461326.jpg';
import card1_image from "../meal_pics/amala.jpg";
import card2_image from "../meal_pics/efo riro.jpeg";
import card3_image from "../meal_pics/freshjollof.jpeg";


export default class Foodcardsection extends Component {
    render() {
        return (
            <div>
                <section className="meals_container">
                    <div className="meal_category meal_card card1">
                        <img src={card1_image} alt='African meals' className='card_image'></img>
                        <div className='meal_info'>
                            Meal information goes here, meal information goes here meal information goes here
                            meal information goes heremeal information goes heremeal information goes heremeal information goes here

                            <br></br><br></br>
                                <Link to="/placeorder" className="meal_info_links"> Order </Link>
                            
                        </div>
                    </div>

                    <div className="meal_category meal_card card2">
                    <img src={card2_image} alt='African meals' className='card_image'></img>
                        <div className='meal_info'>
                            meal information goes here, meal information goes here meal information goes here
                            meal information goes heremeal information goes heremeal information goes heremeal information goes here
                            
                            <br></br> <br></br>

                            <Link to="/placeorder" className="meal_info_links"> Order </Link>

                        </div>
                    </div>
                    <div className="meal_category meal_card card3">
                    <img src={card3_image} alt='African meals' className='card_image'></img>
                        <div className='meal_info'>
                            meal information goes here, meal information goes here meal information goes here
                            meal information goes heremeal information goes heremeal information goes heremeal information goes here
                            
                            <br></br> <br></br>
                            <Link to="placeorder" className="meal_info_links"> Order </Link>
                        </div>
                    </div>
                </section> 
            </div>
        )
    }
}
