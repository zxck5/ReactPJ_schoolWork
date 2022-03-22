// import './App.css';
import React, { useState } from 'react';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react/cjs/react.production.min';

class App extends React.Component {
    render() {
        return (
            <div>
                <Person name="Arman" nationality="Jupiter" age="230" />
                {/* <Person name="Hafid" nationality="Mars" />
        <Person name="Michael" nationality="Mars" /> */}
            </div>
        );
    }
}
// function Person(props) {
//   const [age, updateAge] = useState(props.age);
//   const buttonClick = () => {
//     updateAge(parseInt(age)+1);
//   }
//   return (<div>Hi, My name is {props.name} and I am {age} years old. <button onClick={buttonClick}>Increase</button></div>);
// }
// function Person(props) {
// 
//   const [name, updateName] = useState(props.name);
//   const [country, setCountry] = useState(props.nationality);
//   var buttonClick = () => {
//     setCountry("USA");
//   }
//   return (<div><Account/> 
//   Hi, My name is {name} and I am from {country} <button onClick={buttonClick}>Update it to USA</button></div>);
// }
class Person extends React.Component {
    constructor(props) {
        super(props);
        this.changeNationality = this.changeNationality.bind(this);
        this.state = {
            name: this.props.name,
            nationality: this.props.nationality,
            date: "2022/02/09"
        };
    }
    static getDerivedStateFromProps(props, state) {

        //alert("getDerivedStateFromProps is Triggered");
    }
    componentDidMount() {
        //alert("componentDidMount is Triggered");
    }
    componentDidUpdate() {
        //alert("componentDidUpdate is Triggered");
    }
    changeNationality() {
        this.setState({ nationality: "Canada" });
    }
    render() {
        return <div>Hi, My name is {this.state.name} and I am from {this.state.nationality}  and this was created on {this.state.date}
            <button onClick={this.changeNationality}>Change Nationality</button>
        </div>
    }
}


export default App;




