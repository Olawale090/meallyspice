import React, { Component } from 'react'
// import axios from 'axios'

export class Bottom extends Component {

    getStyle = ()=>{
        if(this.props.newData.done === true){

            return {
                textDecoration:'line-through'
            }

        }
    }


    deleteStyle = ()=>{
        if(this.props.newData.removed === true){

            return {
                display:'none'
            }

        }
    }

  

    render() {

        return (

            <div style={this.deleteStyle()}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

                <div style={this.getStyle()}>

                    <div style={{height:'3em', fontSize:'2em', fontFamily: 'geosans',  backgroundColor:'red', color:'white', borderBottom:'solid 1px yellow'}}> 

                        <input type='checkbox' onChange={this.props.checkingList.bind(this, this.props.newData.id)}></input>
                            
                            {this.props.newData.title} <br></br>
                        <sub>Email: {this.props.newData.title}</sub>
                        
                        <button className="del_button" type="button" onClick={this.props.deletion.bind(this, this.props.newData.id)}> X </button>

                    </div>

                </div>

            </div>
        );
            
        
    }
}

export default Bottom
