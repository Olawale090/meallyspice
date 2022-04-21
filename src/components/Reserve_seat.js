import React, { Component } from 'react';
import '../styles/form.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import meally_avatar from '../icons/undraw_breakfast_psiw.svg';

export class reserve_seat extends Component {
    render() {
        return (
            <div className="form_body">
                
                <form className="sign_up_form">

                    <img src={meally_avatar} className="meally_avatar" alt="meally_avatar"/>

                    <header className="form_title"> meallySpice </header>
                    <label className="form_label">Number of seat </label>
                    <input className="input_btn" type="text" placeholder="Please enter number of seats"></input>

                    <label className="form_label"> Table size </label>
                    <select className="input_btn" type="text" placeholder=" Table size prefered ">
                        <option className="food_type"> Regular (2 people) </option>
                        <option className="food_type"> Medium (2-5 people) </option>
                        <option className="food_type"> Large (5-10 people) </option>
                    </select>

                    <label className="form_label"> Seat class </label>
                    <select className="input_btn" type="text" placeholder="Please enter your prefered class">
                        <option className="food_type"> Classic </option>
                        <option className="food_type"> Corporate </option>
                        <option className="food_type"> First class </option>
                    </select>

                    <input className="input_btn submit_btn" type="button" value="Submit"></input>
                    <div className="form_notification"> something went wrong </div>
                    
                    
                </form>

            </div>
        )
    }
}

export default reserve_seat
