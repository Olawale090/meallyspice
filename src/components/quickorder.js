import React, { Component } from 'react'
import Nav from './Navs';
import Footer from './Footer';
// import Foodcardsection from './Foodcardsection';
import { Link } from 'react-router-dom';
import '../styles/quick_meal.css';

import quick_card_image1 from '../meal_pics/friedrice.jpg';
import quick_card_image2 from '../meal_pics/chicken-pepper-soup-recipe-main-photo-12.jpg';
import quick_card_image3 from '../meal_pics/download.jpg';

import quick_card_image4 from '../meal_pics/pounded yam.jpg';
import quick_card_image5 from '../meal_pics/efo riro2.jpeg';
import quick_card_image6 from '../meal_pics/yam and egg.jpg';
// import Bottom from './Bottom';

export default class quickorder extends Component {
    render() {
        return (
            <div>
                <Nav />
                {/* <Foodcardsection /> */}

                <div className="swallow_quick_order">
                    <section className="quick_meals_container">
                        <div className="quick_meal_category quick_meal_card quick_card1">

                            <img src={quick_card_image1} alt='African meals' className='card_image'></img>

                            <div className='quick_meal_info'>
                                Meal information goes here, meal information goes here meal information goes here
                                meal information goes heremeal information goes heremeal information goes heremeal information goes here

                                <br></br><br></br>
                                <div className="quick_order">
                                    <Link to="/payment" className="quick_meal_info_links"> Order </Link>
                                    <button className="quick_meal_price">#1,500</button>
                                </div>
                            </div>
                        </div>

                        <div className="quick_meal_category quick_meal_card quick-card2">
                        <img src={quick_card_image2} alt='African meals' className='card_image'></img>
                            <div className='quick_meal_info'>
                                meal information goes here, meal information goes here meal information goes here
                                meal information goes heremeal information goes heremeal information goes heremeal information goes here
                                
                                <br></br> <br></br>

                                <div className="quick_order">
                                    <Link to="/payment" className="quick_meal_info_links"> Order </Link>
                                    <button className="quick_meal_price">#1,500</button>
                                </div>

                            </div>
                        </div>
                        <div className="quick_meal_category quick_meal_card quick_card3">
                        <img src={quick_card_image3} alt='African meals' className='card_image'></img>
                            <div className='quick_meal_info'>
                                meal information goes here, meal information goes here meal information goes here
                                meal information goes heremeal information goes heremeal information goes heremeal information goes here
                                
                                <br></br> <br></br>
                                <div className="quick_order">
                                    <Link to="/payment" className="quick_meal_info_links"> Order </Link>
                                    <button className="quick_meal_price">#1,500</button>
                                </div>

                            </div>
                        </div>
                    </section> 

                </div>

                 <div className="swallow_quick_order" style={{marginBottom:'2rem'}}>
                    <section className="quick_meals_container">
                        <div className="quick_meal_category quick_meal_card quick_card4">

                            <img src={quick_card_image4} alt='African meals' className='card_image'></img>

                            <div className='quick_meal_info'>
                                Meal information goes here, meal information goes here meal information goes here
                                meal information goes heremeal information goes heremeal information goes heremeal information goes here

                                <br></br><br></br>
                                <div className="quick_order">
                                    <Link to="/payment" className="quick_meal_info_links"> Order </Link>
                                    <button className="quick_meal_price">#1,500</button>
                                </div>
                            </div>
                        </div>

                        <div className="quick_meal_category quick_meal_card quick-card5">
                        <img src={quick_card_image5} alt='African meals' className='card_image'></img>
                            <div className='quick_meal_info'>
                                meal information goes here, meal information goes here meal information goes here
                                meal information goes heremeal information goes heremeal information goes heremeal information goes here
                                
                                <br></br> <br></br>

                                <div className="quick_order">
                                    <Link to="/payment" className="quick_meal_info_links"> Order </Link>
                                    <button className="quick_meal_price">#1,500</button>
                                </div>

                            </div>
                        </div>
                        <div className="quick_meal_category quick_meal_card quick_card6">
                        <img src={quick_card_image6} alt='African meals' className='card_image'></img>
                            <div className='quick_meal_info'>
                                meal information goes here, meal information goes here meal information goes here
                                meal information goes heremeal information goes heremeal information goes heremeal information goes here
                                
                                <br></br> <br></br>

                                <div className="quick_order">
                                    <Link to="/payment" className="quick_meal_info_links"> Order </Link>
                                    <button className="quick_meal_price">#1,500</button>
                                </div>

                            </div>
                        </div>
                    </section> 

                </div>
                <Footer />
            </div>
        )
    }
}
