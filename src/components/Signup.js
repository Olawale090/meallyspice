import React, { Component } from 'react';
import '../styles/form.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import meally_avatar from '../icons/undraw_breakfast_psiw.svg';
import  axios from 'axios';

export class Signup extends Component {

    state = {
        newData:{
            name:"",
            phone:"",
            email:"",
            password:"",
            status:"",
            disabled:false
        }
            
    }

    set_customer_name = (name)=>{
        let newname = {
            name:name
        }
        this.setState({
            newData:Object.assign({},this.state.newData,newname)
        })
    }

    set_customer_phone = (phone)=>{

        let newphone = {
            phone:phone
        }

        this.setState({
            newData:Object.assign({},this.state.newData,newphone)
        })

        
    }

    set_customer_email = (email)=>{

        let newemail = {
            email:email
        }

        this.setState({
            newData:Object.assign({},this.state.newData,newemail)
        })

        
    }

    set_customer_password = (password)=>{

        let newpassword = {
            password:password
        }

        this.setState({
            newData:Object.assign({},this.state.newData,newpassword)
        });
        

    }

    changeColor = ()=>{
        if(this.state.newData.status === "Registration successful"){
            return{
                color:"rgb(42, 231, 143)"
            }
        }
    }

    disableSubmitButton = ()=>{
        
        let disabler = {
            disabled:true
        }

        this.setState({
            newData:Object.assign({},this.state.newData,disabler)
        });
        

    };

    fetch_user_exist = ()=>{

        axios.get('http://localhost:1024/checkuser').then((res)=>{
                                                
                                                res.data.map(data =>{
                                                    
                                                    if(data.customer_email == this.state.newData.email){

                                                        let newstatus = {
                                                            status: "Account already exist, please login"
                                                        }
        
                                                        this.setState({
                                                            newData:Object.assign({},this.state.newData,newstatus)
                                                        });
                                                        this.disableSubmitButton();
                                                        

                                                    }else{
                                                        console.warn("Program deadlock approaching!!!");
                                                       
                                                    }
                                                })

                                             }).catch(()=>{
                                                console.log("Error queried: user data not found");
                                             })


    }

    submit_user = ()=>{
        let checker = this.state.newData;
        if(checker.name == "" || checker.phone =="" || checker.email == "" || checker.password == ""){

            let newstatus = {
                status: "Please fill the empty field(s)"
            }

            this.setState({
                newData:Object.assign({},this.state.newData,newstatus)
            });

        }

        axios.post('http://localhost:1024/register',{
                                                    customerName:this.state.newData.name,
                                                    customerPhone:this.state.newData.phone,
                                                    customerEmail:this.state.newData.email,
                                                    customerPassword:this.state.newData.password
                                            }).then((res)=>{

                                                if(res.data === "Fill all form inputs"){
                                                    let newstatus = {
                                                        status: "Please fill the empty field(s)"
                                                    }
                                        
                                                    this.setState({
                                                        newData:Object.assign({},this.state.newData,newstatus)
                                                    });

                                                } else if(res.data == "Registration successful"){

                                                    let newstatus = {
                                                        status: "Registration successful"
                                                    }
    
                                                    this.setState({
                                                        newData:Object.assign({},this.state.newData,newstatus)
                                                    });

                                                    window.open("/signin","_self");

                                                }
                                            

                                             }).catch(()=>{
                                                let newstatus = {
                                                    status: "Registration failed please try again"
                                                }

                                                this.setState({
                                                    newData:Object.assign({},this.state.newData,newstatus)
                                                });
                                             })

    }


    render() {
        
        return (
            <div className="form_body">
                
                <form  onSubmit={this.submit} className="sign_up_form" method='POST' action='http://localhost:3000/signup'>

                    <img src={meally_avatar} className="meally_avatar" alt="meally_avatar"/>

                    <header className="form_title"> meallySpice </header>
                    <label className="form_label">Customer name </label>
                    <input className="input_btn" type="text" name="fullname"  placeholder="Please enter your full name" 
                            onChange={(e)=>{
                                this.set_customer_name(e.target.value)
                            }}>

                    </input>

                    <label className="form_label"> Phone number </label>
                    <input className="input_btn" type="text" name="phone_number" placeholder="Please enter your phone number" 
                           onChange={(e)=>{
                              this.set_customer_phone(e.target.value); 
                           }}>
                            
                    </input>

                    <label className="form_label"> E-mail </label>
                    <input className="input_btn" type="text" name="email" placeholder="Please enter your email" 
                        onChange={(e)=>{
                            this.set_customer_email(e.target.value);
                        }}

                        onBlur={(e)=>{
                            this.fetch_user_exist(e.target.value);
                        }}/>

                    <label className="form_label">Password </label>
                    <input className="input_btn" type="password" name="password" placeholder="Please enter your password"
                        onChange={(e)=>{
                            this.set_customer_password(e.target.value);
                        }}></input>

                    <input className="input_btn submit_btn" type="button" value="Submit" onClick={this.submit_user} disabled={this.state.newData.disabled}></input>
                    <div className="form_notification" style={this.changeColor()}> {this.state.newData.status} </div>
                    <div className="form_redirection"> Already have an account? <Link to="/signin" style={{color: 'rgb(42, 231, 143)'}}> Sign in </Link> </div>
                    
                </form>

            </div>
        )
    }
}

export default Signup
