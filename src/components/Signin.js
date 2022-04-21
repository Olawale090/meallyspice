import React, { Component } from 'react';
import '../styles/form.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import meally_avatar from '../icons/undraw_breakfast_psiw.svg';

export class Signin extends Component {
    render() {
        return (
            <div className="form_body">
                
                <form className="sign_up_form">

                    <img src={meally_avatar} className="meally_avatar" alt="meally_avatar"/>
                    <header className="form_title"> meallySpice </header>

                    <label className="form_label"> E-mail </label>
                    <input className="input_btn" type="text" placeholder="Please enter your email"></input>

                    <label className="form_label">Password </label>
                    <input className="input_btn" type="password" placeholder="Please enter your password"></input>

                    <input className="input_btn submit_btn" type="button" value="Submit"></input>
                    <div className="form_notification"> something went wrong </div>
                    <div className="form_redirection"> Don't have an account ? <Link to="/signup" style={{color:'rgb(42, 231, 143)'}}> Sign up </Link> </div>
                    
                </form>

            </div>
            

        )
    }
}

export default Signin
