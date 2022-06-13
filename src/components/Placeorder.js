import React, { Component } from 'react'
import Navs from './Navs';
import { Link } from 'react-router-dom';
import '../styles/placeholder.css';
import meally_avatar from '../icons/undraw_breakfast_psiw.svg';
import axios from 'axios';

export default class Placeorder extends Component {

    state = {
        orders:{
            food_category:"",
            food_price:0,
            food_quantity:0,
            soup_type:"",
            meat_type:"",
            meat_price:0,
            meat_quantity:0,
            water_type:"",
            water_price:0,
            water_quantity:0,
            price:0,
            customer_phone_number:0,
            status:''
        }
    }

    set_food_price = (food_name)=>{
        if(food_name == "Amala (#100)" || food_name =="Semovita (#100)"){
            
            const food = {
                food_category:food_name,
                food_price: 100
            }

            // do not use 'let' to create the food object else the keys would not be found
            this.setState({orders:Object.assign({},this.state.orders,food)})
    
        }else if(food_name == "Eba (#50)" || food_name =="Fufu (#50)"){

            const food = {
                food_category:food_name,
                food_price: 50
            }

            this.setState({orders:Object.assign({},this.state.orders,food)})

        }else if(food_name == "Porridge (#200)" || food_name =="Cook up rice (#200)" || food_name =="Yam and Egg (#200)" || food_name == "Bread Moinmoin (#200)"){
            
            const food = {
                food_category:food_name,
                food_price: 200
            }

            this.setState({orders:Object.assign({},this.state.orders,food)})

        }else if(food_name == "Bread and Egg (#300)"){
            const food = {
                food_category:food_name,
                food_price: 300
            }

            this.setState({orders:Object.assign({},this.state.orders,food)})

        }else if(food_name == "Jollof rice (#500)" || food_name == "Fried rice (#500)"){

            const food = {
                food_category:food_name,
                food_price: 500
            }

            this.setState({orders:Object.assign({},this.state.orders,food)})

        }else if(food_name == "Pounded yam (#1000)"){

            const food = {
                food_category:food_name,
                food_price: 1000
            }

            this.setState({orders:Object.assign({},this.state.orders,food)})
        }
        
    }

    set_food_quantity = (quantity)=>{

        if(isNaN(quantity)){

            alert("Please enter number, not word");

        }else{
            
            const food_quantity = {
                food_quantity:quantity
            }

            this.setState({orders:Object.assign({},this.state.orders,food_quantity)})
        }
        
    }

    set_soup_type = (soup)=>{

        const set_soup ={
            soup_type:soup
        }

        this.setState({orders:Object.assign({},this.state.orders,set_soup)})
    }

    set_meat_price = (meat)=>{

        if(meat == "Assorted meats with Chicken (#2000)" || meat =="Assorted goat meats (Asun) (#2000)" || meat == "Assorted meats with Turkey (#2000)" || meat == "Assorted meats with Turkey and chicken (#2000)"){
            
            const meat_type = {
                meat_type:meat,
                meat_price: 2000
            }

            this.setState({orders:Object.assign({},this.state.orders,meat_type)})
    
        }else if(meat == "Ogunfe (#100)" || meat == "Beef (#100)" || meat == "Pomo (#100)" || meat == "Pork (#100)"){

            const meat_type = {
                meat_type:meat,
                meat_price: 100
            }

            this.setState({orders:Object.assign({},this.state.orders,meat_type)})

        }else if(meat == "Chicken (#500)"){

            const meat_type = {
                meat_type:meat,
                meat_price: 500
            }

            this.setState({orders:Object.assign({},this.state.orders,meat_type)})

        }else if(meat == "Turkey (#1000)"){

            const meat_type = {
                meat_type:meat,
                meat_price: 1000
            }

            this.setState({orders:Object.assign({},this.state.orders,meat_type)})

        }else if(meat =="Bush meat (#700)"){

            const meat_type = {
                meat_type:meat,
                meat_price: 700
            }

            this.setState({orders:Object.assign({},this.state.orders,meat_type)})

        }else if(meat == "Boiled egg (#70)"){

            const meat_type = {
                meat_type:meat,
                meat_price: 70
            }

            this.setState({orders:Object.assign({},this.state.orders,meat_type)})

        }

        console.log(meat);
        
    }

    set_meat_quantity = (quantity)=>{
        if(isNaN(quantity)){

            alert("Please enter number, not word");

        }else{
            
            const set_meat_quantity = {
                meat_quantity:quantity
            }
    
            this.setState({orders:Object.assign({},this.state.orders,set_meat_quantity)})
        }
        
    }

    set_water_price = (water)=>{
        if(water == "Eva (#200)"){

            const set_water_price = {
                water_type : water,
                water_price:200
            }
            
            this.setState({orders:Object.assign({},this.state.orders,set_water_price)})
        }else if(water == "Other (#100)"){

            const set_water_price = {
                water_type : water,
                water_price:100
            }
            
            this.setState({orders:Object.assign({},this.state.orders,set_water_price)})

        }
        
    }

    set_water_quantity =(quantity)=>{
        if(isNaN(quantity)){

            alert("Please enter number, not word");
            
        }else{
            
            const set_water_quantity = {

                water_quantity:quantity

            }

            this.setState({orders:Object.assign({},this.state.orders,set_water_quantity)})
        }
    }

    customer_phone_number=(phone_number)=>{

        if(isNaN(phone_number)){

            alert("Please enter number, not word");
            
        }else{
            
            const set_phone_number = {

                customer_phone_number:phone_number

            }

            this.setState({orders:Object.assign({},this.state.orders,set_phone_number)})
        }

    }

    post_order = ()=>{
        axios.post('http://localhost:1024/order',{
            foodCategory:this.state.orders.food_category,
            foodPrice:this.state.orders.food_price,
            foodQuantity:this.state.orders.food_quantity,
            soupType:this.state.orders.soup_type,
            meatType:this.state.orders.meat_type,
            meatPrice:this.state.orders.meat_price,
            meatQuantity:this.state.orders.meat_quantity,
            waterType:this.state.orders.water_type,
            waterPrice:this.state.orders.water_price,
            waterQuantity:this.state.orders.water_quantity,
            customerName:localStorage.getItem("customerName"),
            customerPhone:localStorage.getItem("customerPhoneNumber")
        }).then(res=>{
        
            if(this.state.orders.food_category !="" && this.state.orders.food_quantity !="" && this.state.orders.meat_type !="" 
                && this.state.orders.meat_quantity !="" && this.state.orders.water_type && localStorage.getItem("customerName") != ""){
                    
                    const set_status = {

                        status:res.data
        
                    }

                    this.setState({orders:Object.assign({},this.state.orders,set_status)})

                    setTimeout(()=>{
                        window.open("/payment","_Self");
                    },1500)
            }else{
                const set_status = {

                    status:"Please sign in and enter food details"
    
                }

                this.setState({orders:Object.assign({},this.state.orders,set_status)})
            }
            

            

        }).catch(error=>{
            console.log(error);
        })

    }

    calculate_food_price = ()=>{
        const food = this.state.orders.food_price*this.state.orders.food_quantity;
        const meat = this.state.orders.meat_price*this.state.orders.meat_quantity;
        const water = this.state.orders.water_price*this.state.orders.water_quantity;

        return food+meat+water;
    }

    setSuccessColor = ()=>{
        if(this.state.orders.status = "Food ordered succesfully, we'll call you for delivery in a moment"){
            return{
                color:'rgb(39, 197, 124)'
            }
        }
    }


    render() {

        return (
            <div>
                 {/* <Navs /> */}
                 <div  className="form_body form_body_2">
                
                    <form className="sign_up_form">

                        <img src={meally_avatar} className="meally_avatar" alt="meally_avatar"/>
                        <header className="form_title"> meallySpice </header>

                        <label className="form_label"> Food category </label>
                        <select className="input_btn" type="text" placeholder="Please enter your meal type" onChange={(e)=>{

                            this.set_food_price(e.target.value);

                        }}>
                            <option className="food_type"> Select food type </option>
                            <option className="food_type"> Amala (#100) </option>
                            <option className="food_type"> Eba (#50) </option>
                            <option className="food_type"> Semovita (#100)</option>
                            <option className="food_type"> Fufu (#50)</option>
                            <option className="food_type"> Porridge (#200) </option>
                            <option className="food_type"> Jollof rice (#500) </option>
                            <option className="food_type"> Fried rice (#500)</option>
                            <option className="food_type"> Cook up rice (#200)</option>
                            <option className="food_type"> Yam and Egg (#200)</option>
                            <option className="food_type"> Bread and Egg (#300) </option>
                            <option className="food_type"> Bread Moinmoin (#200)</option>
                            <option className="food_type"> Pounded yam (#1000)</option>
                        </select>

                        <label className="form_label"> Food Quantity </label>
                        <input className="input_btn" type="text" placeholder="Please enter your food quantity plates or wraps(for swallows) "
                        onChange={(e)=>{
                            this.set_food_quantity(e.target.value);
                        }}/>

                        <label className="form_label"> Soup type </label>
                        <select className="input_btn" placeholder="Please enter your password" onChange={(e)=>{
                            this.set_soup_type(e.target.value);
                        }}>
                            <option className="food_type"> Select soup </option>
                            <option className="food_type"> Egusi soup </option>
                            <option className="food_type"> Ogbono soup </option>
                            <option className="food_type"> Okro soup </option>
                            <option className="food_type"> Ewedu (Amaranth) and stew</option>
                            <option className="food_type"> Efo riro (spinach) </option>
                            <option className="food_type"> Ogbono soup </option>
                            <option className="food_type"> Efo and Egusi (spinach with melon) </option>
                            <option className="food_type"> Gbegiri (Beans soup) </option>
                            <option className="food_type"> Abula (Beans soup with Amaranth) </option>
                            <option className="food_type"> Groundnut soup </option>
                            <option className="food_type"> Pepper soup</option>
                            {/* <option className="food_type"> Boiled egg (#70) </option> */}
                        </select>
                        
                        <label className="form_label"> Meat type </label>
                        <select className="input_btn" type="password" placeholder="Please enter your password" onChange={(e)=>{
                            this.set_meat_price(e.target.value);
                        }}>
                            <option className="food_type"> Select meat </option>
                            <option className="food_type"> Assorted meats with Chicken (#2000) </option>
                            <option className="food_type"> Assorted goat meats (#2000) </option>
                            <option className="food_type"> Assorted meats with Turkey (#2000) </option>
                            <option className="food_type"> Assorted meats with Turkey and chicken (#2000) </option>
                            <option className="food_type"> Ogunfe (#100) </option>
                            <option className="food_type"> Beef (#100) </option>
                            <option className="food_type"> Pomo (#100) </option>
                            <option className="food_type"> Chicken (#500) </option>
                            <option className="food_type"> Turkey (#1000) </option>
                            <option className="food_type"> Bush meat (#700) </option>
                            <option className="food_type"> Pork (#100) </option>
                            <option className="food_type"> Boiled egg (#70) </option>
                        </select>

                        <label className="form_label"> Meat Quantity </label>
                        <input className="input_btn" type="text" placeholder="Please enter your meat quantity" 
                        onChange={(e)=>{
                            this.set_meat_quantity(e.target.value);
                        }}/>

                        <label className="form_label"> Water type </label>
                        <select className="input_btn" type="password" placeholder="Please enter your password" 
                        onChange={(e)=>{
                            this.set_water_price(e.target.value)
                        }}>
                            <option className="food_type"> Select water </option>
                            <option className="food_type"> Eva (#200) </option>
                            <option className="food_type"> Other (#100) </option>
                        </select>

                        <label className="form_label"> Water Quantity </label>
                        <input className="input_btn" type="text" placeholder="Please enter your meat quantity" 
                        onChange={(e)=>{
                            this.set_water_quantity(e.target.value);
                        }}/>

                        {/* <label className="form_label"> Customer phone number </label>
                        <input className="input_btn" type="text" placeholder="Please enter your phone number" 
                        onChange={(e)=>{
                            this.customer_phone_number(e.target.value);
                        }}/> */}


                        <div className="price_display" style={priceColor}>#{this.calculate_food_price()} Naira</div> 
                        <input className="input_btn calculate_btn" type="button" value="Calculated price" onClick={(e)=>{
                            // console.log(this.calculate_food_price());
                            e.target.value = "Calculated price: " + this.calculate_food_price();
                        }}/>
                        <input className="input_btn submit_btn" type="button" value="Order" onClick={this.post_order}/>

                        <div className="form_notification" style={this.setSuccessColor()}> {this.state.orders.status} </div>
                        {/* <div className="form_redirection"> Already have an account? <Link to="/signin" style={{color: 'rgb(42, 231, 143)'}}> Sign in </Link> </div> */}
                        
                    </form>

                </div>
                
            </div>
        )
    }
}

const priceColor = {
    marginBottom:"0.5rem",
    color:"rgb(42, 231, 143)",
    textAlign:"center",
    padding:"1rem",
    fontSize:"1.2rem",
    backgroundColor:"rgba(0,0,0,0.5)"
}


