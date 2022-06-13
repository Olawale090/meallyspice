import React, { Component } from 'react'
import Navs from './Navs';
import "../styles/services.css";
import meally_avatar from '../icons/undraw_breakfast_psiw.svg';
import { Link } from 'react-router-dom';

export default class Service extends Component {
    render() {
        return (
            <div>
                <Navs />
                {/* <img src={meally_avatar} className="meally_avatar" alt="meally_avatar"/> */}

                <div className='services'>
                    <li className='services_tabs event_tab'>Event delivery</li>
                    <li className='services_tabs home_support_tab'>Home support</li>
                    <li className='services_tabs soup_tab'>Soup</li>
                    <li className='services_tabs cocktail_tab'>Cocktail party delivery</li>
                    <li className='services_tabs subscription_tab'>Snacks</li>
                    <li className='services_tabs corporate_tab'>Corporate event delivery</li>
                </div>
            </div>
        )
    }
}
