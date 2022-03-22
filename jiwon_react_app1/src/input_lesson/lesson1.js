import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import react from 'react';
import { useRef } from "react";
// import './App.css';


function App() {
  return (
    <div>
      <Form />
      <hr />
      <ControlledComponent />
      <hr />
      <UncontrolledComponent />
    </div>)
}
class ControlledComponent extends react.Component {
  constructor() {
    super();
    this.state = { errors: {} }

  }

  validateRequired = (errors, value, inputId, targetFieldId) => {
    if (inputId == targetFieldId) {
      errors[inputId] = value.length > 0 ? "" : "*";
    }
  }
  onChange = (event) => {
    var inputId = event.target.id;
    var value = event.target.value;
    this.setState({ [inputId]: value })
    var errors_new = this.state.errors;
    var inputs = ["txt_country", "txt_name", "txt_lname", "txt_mname"];
    for (var i = 0; i < inputs.length; i++) {
      this.validateRequired(errors_new, value, inputId, inputs[i]);
    }

    if (inputId == "txt_country") {
      errors_new.countryMessage = value == "Canada" ? "" : "Invalid Country";
    }
    this.setState({ errors: errors_new });

  }
  render() {
    return (
      <div>
        <h1>Example of Controlled Component</h1>
        <div>Hello FN:{this.state.txt_name} LN:{this.state.txt_lname}. You are from {this.state.txt_country}! </div>
        <p>First Name:</p>
        <input id="txt_name" onChange={this.onChange} />
        <ErrorMessage message={this.state.errors.txt_name} />
        <p>Last Name:</p>
        <input id="txt_lname" onChange={this.onChange} />
        <ErrorMessage message={this.state.errors.txt_lname} />
        <p>Middle Name:</p>
        <input id="txt_mname" onChange={this.onChange} />
        <ErrorMessage message={this.state.errors.txt_mname} />
        <p>Country:</p>
        <input id="txt_country" onChange={this.onChange} />
        <ErrorMessage message={this.state.errors.txt_country} />
        <ErrorMessage message={this.state.errors.countryMessage} />


      </div>
    );
  }
}
//Error message component
function ErrorMessage(props) {
  return (<span style={{ color: "red", paddingLeft: "5px" }}>{props.message}</span>);
}


class UncontrolledComponent extends react.Component {
  constructor() {
    super();
    this.name = react.createRef();
    this.lname = react.createRef();
    this.country = react.createRef();
    this.mname = react.createRef();
  }
  onSubmit = (e) => {

    alert("Hello " +
      this.name.current.value
      + " " +
      this.lname.current.value
      + " from " +
      this.country.current.value);
  }
  onChange = (e) => {

  }
  render() {
    return (
      <div>
        <h1>Example of UnControlled Component</h1>
        <br />
        <div>Hello</div>
        <p>First Name: </p>
        {/* <input type="text" ref={(input) => this.input = input} /> */}
        <input id="txt_name" ref={this.name} onChange={this.onChange} />
        <p>Last Name:</p>
        <input id="txt_lname" ref={this.lname} />
        <p>Middle Name:</p>
        <input id="txt_mname" ref={this.mname} />
        <p>Country:</p>
        <input id="txt_country" ref={this.country} />
        <input type="button" id="btn_submit" value="Register" onClick={this.onSubmit} />
      </div>

    );
  }
}

function Form(props) {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [Charles, setCharles] = useState("");


  // var myotherObject = {age:20,School:"Humber"};
  // var mynewObject = {...myotherObject,name:"Jiwon"};
  // var evenbetter = {...mynewObject,book:"Jiwon"};
  // alert(JSON.stringify(myotherObject));
  // alert(JSON.stringify(mynewObject));
  // alert(JSON.stringify(evenbetter));
  var validateRequired = (value, inputId, targetFieldId) => {
    if (inputId == targetFieldId) {
      var errorMessage = value.length > 0 ? "" : "*";

      setFormErrors({ ...formErrors, [inputId]: errorMessage });

    }
  }
  var buttonClick = () => {
    setCharles("SomeValue");
  }
  var onChange = (event) => {
    var inputId = event.target.id;
    var value = event.target.value;
    //Takes all existing parameters from formValues and , add [inputid]:value at the end of it, or modify it if it was already
      //in the formValues values which we already copied.
      setFormValues({ ...formValues, [inputId]: value });
      var inputs = ["txt_country", "txt_name", "txt_lname", "txt_mname"];
      for (var i = 0; i < inputs.length; i++) {
        validateRequired(value, inputId, inputs[i]);
      }

      if (inputId == "txt_country") {
        var errorMessage = value == "Canada" ? "" : "Invalid Country";
        setFormErrors({ ...formErrors, countryMessage: errorMessage });
      }
  }

  return (
    <div>
      <button value="Update Charles" onClick={buttonClick}>"Update Charles"</button>
      Hello {Charles}!
      <h1>Example of a Function Component Using Hooks to Validate</h1>
      <div>Hello '{formValues.txt_name}'' '{formValues.txt_lname}''. You are from '{formValues.txt_country}'! </div>
      <p>First Name:</p>
      <input id="txt_name" onChange={onChange} />
      <ErrorMessage message={formErrors.txt_name} />
      <p>Last Name:</p>
      <input id="txt_lname" onChange={onChange} />
      <ErrorMessage message={formErrors.txt_lname} />
      <p>Middle Name:</p>
      <input id="txt_mname" onChange={onChange} />
      <ErrorMessage message={formErrors.txt_mname} />
      <p>Country:</p>
      <input id="txt_country" onChange={onChange} />
      <ErrorMessage message={formErrors.txt_country} />
      <ErrorMessage message={formErrors.countryMessage} />
    </div>
  );

}


export default App;