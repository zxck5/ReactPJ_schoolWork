// import './App.css';
import React, { useState } from 'react';


class App extends React.Component {
  render() {
    return (
      <div>
        <Person name="arman" nationality="Mars" color="red" />
        <Person name="Charles" nationality="Pluto" color="blue"/>
        <Person name="Leyla" nationality="Kepler" color="pink"/>
        <Person2 name="function1" nationality="Nope"/>
      </div>
    );
  }
}
class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: this.props.name,
      nationality: this.props.nationality,
      color: this.props.color
       };
    //For a given function, creates a bound function that has the same 
    //body as the original function. The this object of the bound 
    //function is associated with the specified object, and has the specified 
    //initial parameters.
    this.updateNationality = this.updateNationality.bind(this);
  }
  updateNationality() {
    //You cannot use setState inside constructor
    this.setState({ nationality: "Canada",color:"yellow" });
    //this.setState
    this.anotherCall();
  }
  anotherCall() {
    //this.updateNationality();
  }
  render() {
    return <div style={{ backgroundColor: this.state.color }}>Hi, My name is {this.state.name} and I am from {this.state.nationality} <button onClick={this.updateNationality}>Change Nationality</button></div>
  }
}
//Using a functional component and accessing props as parameters
function Person2(props){
  var updateNationality = ()=>{
    this.setState({ nationality: "Canadian" });
  }
  
  return <div>Hi, My name is {props.name} and I am from {props.nationality}</div>
}


export default App;





