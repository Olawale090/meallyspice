import React, { Component } from 'react';
// import Newsletter from './Newsletter';

export class Modal extends Component {
    render() {
        return (
            <div>

                <div className="newsletter_body" style={this.props.hide()}>
                
                    <div className="form_elements_container">
                        <input className="subscriber_email" type="text" placeholder="Please enter your email for lots of cooking tips"></input>
                        <input className="subscriber_submit" type="button" value="subscribe" onClick={this.props.alerter}></input>
                    </div>

                </div>

            </div>
        )
    }
}

export default Modal
