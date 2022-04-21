import React, { Component } from 'react'
import '../banner.css';
import banner_image from "../meal_pics/appetizer-background-cuisine-326281.jpg";
import { Link } from 'react-router-dom';

export class Banner extends Component {
    render() {
        return (
            <div>

                <section className="main_banner">


                    <div className="banner_content">
                        
                        <div className='second_banner_text '> 
                            Delicious and Nutritious meals is what we sell
                        </div>
                        
                        <div className='banner_text'> 
                            We deliver your meals like you want it
                            <br></br>when you want it
                        </div>

                        <Link to="/service" className="">
                            <button className="button_1"> Let's serve you </button>
                        </Link>

                    </div>
                    
                </section>

            </div>
        )
    }
}

export default Banner
