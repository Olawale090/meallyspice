import React from 'react';
// import Datatransfer from './components/Datatransfer';
import './App.css';
import Banner from './components/Banner';
// import Bottom from './components/Bottom';
import Cardsection from './components/Cardsection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Solution from './components/Solution';
import Search from './components/Search';
// import uuid from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './components/Navs';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Newsletter from './components/Newsletter';
import Foodcardsection from './components/Foodcardsection';
import Placeorder from './components/Placeorder';
import quickorder from './components/quickorder';
import Order_payment from './components/Order_payment';
import Reserve_seat from './components/Reserve_seat';
import Services from './components/Service';
// import {Link} from 'react-router-om';
import axios from 'axios';

class App extends React.Component {

  state = {
    todo:[

    ]
  }

  checkList = (id)=>{

    this.setState(
        {
            alldata:this.state.todo.map(iteratingData =>{
                if (iteratingData.id === id) {

                    iteratingData.done = !iteratingData.done;
                    
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

  render(){

    return (

      <Router>

        <div className="App">

          <Route exact path="/" render={props =>(
              <React.Fragment>
                
                <Nav />
                <Hero />
                <Solution />
                <Banner />
                <Cardsection />
                <Foodcardsection />
                <Banner />
                <Footer />
                <Newsletter />
                {/* <Datatransfer data={this.state.todo } verifyTaskStatus = {this.checkList} deleteTask = {this.removeFromList} /> */}
                
              </React.Fragment>

          )} />


          
          <Route path="/signup" component = {Signup} />
          <Route path="/reserve_seat" component={Reserve_seat} />
          <Route path="/signin" component = {Signin} />
          <Route path="/placeorder" component = {Placeorder} />
          <Route path='/home' component={Nav} /> 
          <Route path="/quickorder" component={quickorder} />
          <Route path="/payment" component= {Order_payment} />
          <Route path="/service" component= {Services} />
          <Route path="/logictest" component= {Search} />
          {/* <Route path ="/service" component = {Search} /> */}
          
        </div>

      </Router>
    );
  }
    
 
}

export default App;
