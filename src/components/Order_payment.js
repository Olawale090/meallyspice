import React, { Component } from 'react'
import Navs from './Navs';
import meally_avatar from '../icons/undraw_breakfast_psiw.svg';
import { Link } from 'react-router-dom';

export default class Order_payment extends Component {
    render() {
        return (
            <div>
                <Navs />
                <form className="sign_up_form">

                    <img src={meally_avatar} className="meally_avatar" alt="meally_avatar"/>

                    <header className="form_title" style={{color:'red'}}> meallySpice </header>
                    {/* <label className="form_label">Customer name </label> */}
                    <button style={{backgroundColor:'red', color:'white'}} type="button" className="input_btn"> Make payment for your order </button>
                    <button style={{backgroundColor:'rgb(36, 241, 146)', color:'white', border:'none'}} type="button" className="input_btn"> Pay on delivery </button>
                    {/* <div className="form_redirection"> Already have an account? <Link to="/signin" style={{color: 'rgb(42, 231, 143)'}}> Sign in </Link> </div> */}

                </form>
            </div>
        )
    }
}
