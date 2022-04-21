import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import image from '../blur-bowl-cook-461326.jpg';
import '../hero.css';

export class Hero extends Component {
    render() {

        return (
          
            <div className="hero_container">

                <img src={image} alt="cheebuck" className='hero_image'/>
                <div className="hero_title">
                    <div className="hero_content"> meallySpice </div>

                    <div className="hero_button_container">

                        <Link to="/placeorder">
                            <button className="hero_schedule_order hero_buttons"> Schedule order </button>
                        </Link>

                        <Link to="/quickorder">
                            <button className="hero_quick_order hero_buttons"> Quick order </button>
                        </Link>
                        
                    </div>
                    <div className="hero_minor_content"> ...we always give your desired taste </div>
                </div>
                
            </div>
            
        )
    }
}

export default Hero
