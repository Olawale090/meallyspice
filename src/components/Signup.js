import React, { Component } from 'react';
import '../styles/form.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import meally_avatar from '../icons/undraw_breakfast_psiw.svg';

export class Signup extends Component {
    render() {
        return (
            <div className="form_body">
                
                <form className="sign_up_form">

                    <img src={meally_avatar} className="meally_avatar" alt="meally_avatar"/>

                    <header className="form_title"> meallySpice </header>
                    <label className="form_label">Customer name </label>
                    <input className="input_btn" type="text" name="fullname"  placeholder="Please enter your full name"></input>

                    <label className="form_label"> Phone number </label>
                    <input className="input_btn" type="text" name="phone_number" placeholder="Please enter your phone number "></input>

                    <label className="form_label"> E-mail </label>
                    <input className="input_btn" type="text" name="email" placeholder="Please enter your email"></input>

                    <label className="form_label">Password </label>
                    <input className="input_btn" type="password" name="password" placeholder="Please enter your password"></input>

                    <input className="input_btn submit_btn" type="button" value="Submit"></input>
                    <div className="form_notification"> something went wrong </div>
                    <div className="form_redirection"> Already have an account? <Link to="/signin" style={{color: 'rgb(42, 231, 143)'}}> Sign in </Link> </div>
                    
                </form>

            </div>
        )
    }
}

export default Signup
