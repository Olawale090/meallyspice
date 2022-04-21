import React, { Component } from 'react';
import Bottom from './Bottom';
import axios from 'axios';

export class Datatransfer extends Component {

    state = {
        todo:[

        ]
    }



    componentDidMount(){
        
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(res=>{
            
            this.setState({todo:res.data})
            console.log(this.state.todo);
            
        });

    }
    
    checkList = (id)=>{

        this.setState(
            {
                alldata:this.state.todo.map(iteratingData =>{

                    if (iteratingData.id === id) {

                        iteratingData.completed = !iteratingData.completed;
                        
                    }

                    return iteratingData;
                })
            });


    }
    
    
    removeFromList = (id)=>{

        this.setState(
            {
                alldata:this.state.todo.map(iteratingData =>{

                    if (iteratingData.id === id) {

                        iteratingData.removed = !iteratingData.removed;
                        
                    }

                    return iteratingData;

                })
            });
    
    }

    render() {
        
        return this.state.todo.map((data2)=>(

            <Bottom key = {data2.id} newData = {data2} checkingList={this.checkList} deletion={this.removeFromList} /> 

        ));
    }
}

export default Datatransfer
