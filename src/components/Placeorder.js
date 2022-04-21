import React, { Component } from 'react'
import Navs from './Navs';
import { Link } from 'react-router-dom';
import '../styles/placeholder.css';
import meally_avatar from '../icons/undraw_breakfast_psiw.svg';

export default class Placeorder extends Component {
    render() {
        return (
            <div>
                 {/* <Navs /> */}
                 <div  className="form_body form_body_2">
                
                    <form className="sign_up_form">

                        <img src={meally_avatar} className="meally_avatar" alt="meally_avatar"/>
                        <header className="form_title"> meallySpice </header>

                        <label className="form_label"> Food category </label>
                        <select className="input_btn" type="text" placeholder="Please enter your meal type">
                            <option className="food_type"> Swallow</option>
                            <option className="food_type"> Jollof rice </option>
                            <option className="food_type"> Fried rice </option>
                            <option className="food_type"> Cook up rice </option>
                            <option className="food_type"> Yam and Egg </option>
                            <option className="food_type"> Bread and Egg </option>
                            <option className="food_type"> Bread Moinmoin </option>
                            <option className="food_type"> Pounded yam </option>
                        </select>

                        <label className="form_label"> Food Quantity </label>
                        <input className="input_btn" type="text" placeholder="Please enter your food quantity plates or wraps(for swallows) "/>

                        <label className="form_label"> Meat type </label>
                        <select className="input_btn" type="password" placeholder="Please enter your password">
                            <option className="food_type"> Assorted meats with Chicken (#2000) </option>
                            <option className="food_type"> Assorted meats without Chicken (#2000) </option>
                            <option className="food_type"> Assorted meats with Turkey (#2000) </option>
                            <option className="food_type"> Assorted meats without Turkey (#2000) </option>
                            <option className="food_type"> Ogunfe (#100) </option>
                            <option className="food_type"> Beef (#100) </option>
                            <option className="food_type"> Pomo (#100) </option>
                            <option className="food_type"> Chicken (#500) </option>
                            <option className="food_type"> Turkey (#1000) </option>
                            <option className="food_type"> Bush meat (#700) </option>
                            <option className="food_type"> Pork (#100) </option>
                            <option className="food_type"> Boiled egg (#70) </option>
                        </select>

                        <label className="form_label"> Meat Quantity </label>
                        <input className="input_btn" type="text" placeholder="Please enter your meat quantity" />

                        <label className="form_label"> Water type </label>
                        <select className="input_btn" type="password" placeholder="Please enter your password">
                            <option className="food_type"> Eva (#200) </option>
                            <option className="food_type"> Other (#100) </option>
                        </select>

                        <label className="form_label"> Water Quantity </label>
                        <input className="input_btn" type="text" placeholder="Please enter your meat quantity" />

                        <input className="input_btn calculate_btn" type="button" value="Calculate price" />
                        <input className="input_btn submit_btn" type="button" value="Order" />

                        <div className="form_notification"> something went wrong </div>
                        {/* <div className="form_redirection"> Already have an account? <Link to="/signin" style={{color: 'rgb(42, 231, 143)'}}> Sign in </Link> </div> */}
                        
                    </form>

                </div>
            </div>
        )
    }
}


