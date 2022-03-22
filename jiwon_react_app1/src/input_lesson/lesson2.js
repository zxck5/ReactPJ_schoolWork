// import logo from './logo.svg';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { buildQueries } from '@testing-library/react';
import react from 'react';
import { useRef } from "react";
// import './App.css';

function App() {
    return (
        <div>
            <ControlledComponent />
            <UncontrolledComponent />
        </div>)
}
class ControlledComponent extends react.Component {
    constructor() {
        super();
        this.state = { errors: {} }
    }
    validateRequired = (errors, value, inputname, yourfieldname) => {
        if (inputname == yourfieldname) {
            errors[inputname] = value.length > 0 ? "" : "Required";
        }
    }
    onChange = (e) => {
        var inputId = e.target.id;
        var value = e.target.value;
        this.setState(
            { [inputId]: e.target.value }
        );
        var errors_new = this.state.errors;

        this.validateRequired(errors_new, value, inputId, "txt_country");
        this.validateRequired(errors_new, value, inputId, "txt_name");
        this.validateRequired(errors_new, value, inputId, "txt_lname");
        if (inputId == "txt_country") {
            errors_new.txt_country = value == "Canada" ? "" : "Invalid Country";
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
                <div style={{ color: "red" }}>{this.state.errors.txt_name}</div>
                <p>Last Name:</p>
                <input id="txt_lname" onChange={this.onChange} />
                <div style={{ color: "red" }}>{this.state.errors.txt_lname}</div>
                <p>Middle Name:</p>
                <input id="txt_mname" onChange={this.onChange} />
                <p>Country:</p>
                <input id="txt_country" onChange={this.onChange} />
                <div style={{ color: "red" }}>{this.state.errors.txt_country}</div>

            </div>
        );
    }
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
        alert("Hello " + this.name.current.value + " " + this.lname.current.value + " from " + this.country.current.value);
    }

    render() {
        return (
            <div>
                <h1>Example of UnControlled Component</h1>
                <br />
                <div>Hello</div>
                <p>First Name: </p>
                <input id="txt_name" ref={this.name} />
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

export default App;