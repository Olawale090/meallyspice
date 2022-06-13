import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Newsletter from './Newsletter';
// import Signup from './Signup';

export class Navs extends Component {

    state = {
        customerName:localStorage.getItem("customerName")
    }

    hideMenu = ()=> {
        if(this.state.customerName !==""){
            return {
                display:"none",
                color:'red'
            }
        }
    };

    showCustomerName = ()=>{
        if(this.state.customerName !==""){
            return {
                color:'rgb(39, 197, 124)',
                display:"block"
            }
        }else{
            return {
                display:"none"
            }
        }
    }

    render() {
        return (
            <div>
                <div className='minor_title'>

                    <section className ="minor_left_flow minor_menu ">
                        <li className ='menu_list app_name'> meallySpice </li>
                        {/* <li className ='menu_list'> <Link to="/home" className="menu_links minor_links"> Home </Link></li> */}
                        {/* <li className ='menu_list'> Quick Guide </li>
                        <li className ='menu_list'> Help and support </li> */}
                        
                    </section>

                    <section className="minor_right_flow">
                    <li className ='menu_list'> <Link to='/logictest' > Terms and Conditions </Link> </li>
                    {/* <li className ='menu_list'> Newsletter </li>
                    <li className ='menu_list'> Customercare </li> */}
                    <li className ='menu_list'> <Link to='/signin' style={this.hideMenu()}> Sign in </Link></li>
                    <li className ='menu_list'> <Link to='/signin' style={this.showCustomerName()}> {localStorage.getItem("customerName")} </Link></li>

                </section>

                </div> 


                <div className='title'>

                    <section className ="left_flow">
                        <li className ='menu_list'> Home support  </ li>
                        {/* <li className ='menu_list'> Categories </li> */}
                        {/* <li className ='menu_list'> Event delivery </li> */}
                        {/* <li className ='menu_list'> Packaged meals </li> */}
                        {/* <li className ='menu_list'> Soups  </li> */}
                    </section>

                    <section className="center_flow">
                    <li className ='search_list'> 
                        <input type="text" className="main_search" placeholder="Please enter your prefered meal" /> 
                    </li>
                    </section>

                    <section className="right_flow">
                        {/* <li className ='menu_list'> Profile </li> */}
                        <li className ='menu_list'> <Link to='/signup' style={{color:'white'}}>  Register </Link> </li>
                        <li className ='menu_list'> <Link to='/reserve_seat' style={{color:'white'}}> Reserve seat </Link> </li>
                        {/* <li className ='menu_list'> Cart </li> */}
                        <li className ='menu_list'> <Link to="/service" style={{color:'white'}}> Services  </Link></li>
                    </section>

                </div> 

                <Newsletter />
            </div>
        )
    }
}

export default Navs

// const title = {

//     width:'100%',
//     height: '3em',
//     color: 'white',
//     fontFamily: 'Calibri',
//     display: 'flex',
  
//   };