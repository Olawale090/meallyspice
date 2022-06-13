import React, { Component } from 'react';
import '../styles/form.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import meally_avatar from '../icons/undraw_breakfast_psiw.svg';
import axios from "axios";

export class Signin extends Component {

    state ={
        userdata:{
            email:"",
            password:"",
            status:""
        }
    }

    customerEmail=(email)=>{

        const newEmail = {
            email:email
        }

        this.setState({userdata:Object.assign({},this.state.userdata,newEmail)})
    };

    customerPassword = (password)=>{
        const newpassword = {
            password:password
        };

        this.setState({userdata:Object.assign({},this.state.userdata,newpassword)})
    };

    submitSignin = ()=>{

        if(this.state.userdata.email == "" || this.state.userdata.password ==""){

            let message = {
                status:"Please enter email and password"
            }
            this.setState({userdata:Object.assign({},this.state.userdata,message)})

        }else{
                axios.get('http://localhost:1024/login').then((res)=>{

                    res.data.map(data=>{
                        if(data.customer_email == this.state.userdata.email && data.customer_password == this.state.userdata.password){
                            
                            localStorage.setItem("customerName",data.customer_name);
                            localStorage.setItem("customerEmail",data.customer_email);
                            localStorage.setItem("customerPhoneNumber",data.customer_phone);

                            let message = {
                                status:"Login successful"
                            }

                            this.setState({userdata:Object.assign({},this.state.userdata,message)})

                            window.open("/","_self");

                        }else{
                            let message = {
                                status:"Please check your email and password and try again"
                            }

                            this.setState({userdata:Object.assign({},this.state.userdata,message)})
                        }

                    });
            
            }).catch(()=>{

                let message = {
                    status:"Login failed please try again"
                }
                this.setState({userdata:Object.assign({},this.state.userdata,message)})
            })

        }

    };

    changeColor = ()=>{
        if(this.state.userdata.status == "Login successful"){
            return{
                color:"rgb(42, 231, 143)"
            }
        }
    }

    render() {
        return (
            <div className="form_body">
                
                <form className="sign_up_form">

                    <img src={meally_avatar} className="meally_avatar" alt="meally_avatar"/>
                    <header className="form_title"> meallySpice </header>

                    <label className="form_label"> E-mail </label>
                    <input className="input_btn" type="email" placeholder="Please enter your email" onChange={(e)=>{
                        this.customerEmail(e.target.value);
                    }}></input>

                    <label className="form_label">Password </label>
                    <input className="input_btn" type="password" placeholder="Please enter your password" onChange={(e)=>{
                        this.customerPassword(e.target.value);
                    }}></input>

                    <input className="input_btn submit_btn" type="button" value="Submit" onClick={this.submitSignin}></input>
                    <div className="form_notification" style={this.changeColor()}> {this.state.userdata.status} </div>
                    <div className="form_redirection"> Don't have an account ? <Link to="/signup" style={{color:'rgb(42, 231, 143)'}}> Sign up </Link> </div>
                    
                </form>

            </div>
            

        )
    }
}

export default Signin
