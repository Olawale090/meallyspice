import React, { Component } from 'react'

export class Combinator extends Component {
  render() {
      
    return this.state.todo.map((data2)=>(

        <Bottom key = {data2.id} newData = {data2} checkingList={this.checkList} deletion={this.removeFromList} /> 
       

    ));
  }
}

export default Combinator