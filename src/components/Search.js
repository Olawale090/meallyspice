import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
import Addtodo from './Addtodo';
import uuid from 'uuid';
// import Bottom from './Bottom';
import axios from 'axios';
import Datatransfer from './Datatransfer';

export class Search extends Component {

    state = {
        todo:[

        ]
    }

    addTodo = (name)=>{

        axios.post("https://jsonplaceholder.typicode.com/todos");
        this.setState({
            todos:[...this.state.todo,newTodo]
        })

        const newTodo = {
            id: uuid.v4(),
            name:name,
            done:false,
            removed:false
        }

        this.setState({
            addNewTodo:[...this.state.todo,newTodo]
        })

    }

    render() {
        return (

            
            <div style={{backgroundColor:'black'}}>
                
                <Addtodo addTodoItem = {this.addTodo} />
                <Datatransfer/>
            </div>

        )

    }
    
   
}

export default Search

