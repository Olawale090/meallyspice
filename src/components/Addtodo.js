import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

export class Addtodo extends Component {

    data2 = {

        title:''

    };

    onSubmit = (e)=>{

        e.preventDefault();
        this.props.addTodoItem(this.data2.title);

        this.setState({
            title:''
        })

    }

    changer=(e)=>{

        this.data2.title = e.target.value
        
    }


  render() {
    return (
        <div>

            <li className ='menu_list'> <Link to="/"> Homepage </Link></li>

            <div style={{width:'100%', color:'black'}}>

                <form onSubmit={this.onSubmit}>

                    <input type="text" name="title" placeholder="Enter task to search" className="filter_input" onChange={this.changer}></input>
                    <br></br><button className="filter_button"> Submit </button>

                </form>

            </div>

        </div>
    )
  }
}

export default Addtodo