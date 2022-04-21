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
                    <li className='services_tabs'>Event delivery</li>
                    <li className='services_tabs'>Home support</li>
                    <li className='services_tabs'>Soup</li>
                    <li className='services_tabs'>Cocktail party delivery</li>
                    <li className='services_tabs'>Monthly Subscription</li>
                    <li className='services_tabs'>Corporate event delivery</li>
                </div>
            </div>
        )
    }
}
