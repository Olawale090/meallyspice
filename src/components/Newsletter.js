import React, { Component } from 'react';
import Modal from './Modal';
import '../styles/newsletter.css';

export class Newsletter extends Component {

    displayKnob = {

        hidden:false

    }


    toggler = ()=>{

        if(this.displayKnob.hidden){

            this.displayKnob.hidden = !this.displayKnob.hidden;

        }

    }

    hideModal= ()=>{

        if (this.displayKnob.hidden === false) {
            
            return {
                display: 'none'
            }

        } 

    }

    showModal = ()=>{
        if (this.displayKnob.hidden === true) {
            
            return {
                display: 'block'
            }

        } 
    }

    alerter = ()=>{

        alert(" something is here ");

    }
    render() {

        // this.show();
        return (

            <div>

                <Modal alerter = {this.alerter} hide = {this.hideModal} show = {this.showModal} toggleModal = {this.toggler} dataCarrier = {this.displayKnob } />
                
            </div>
            
            

        )
    }
}

export default Newsletter
