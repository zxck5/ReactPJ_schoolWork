import React, { useState } from "react";


class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Form/>
                <ControlledComponent />
                <UncontrolledComponent />

            </div>
        );
    }
}
const Form = () =>{
    const [formValue, setValue] = useState({});
    const [error, setError] = useState({});

    const onChange = (e) => {
        var id = e.target.id;
        var value = e.target.value;
        setValue({...formValue,[id] : value});
        validateValue(id,value);

    }
    const validateValue = (id,value) => {
        var array = ["uName","pw","country"];
        for (var i = 0; i < array.length; i++) {
            if (id == "pw") {
                var errorValue = isNaN(formValue["pw"]) || isNaN(value) == true ? "Type in numbers": ""
                setError({...error, "pwMessage" : errorValue});
                // errorValue = value != "" ? "" : "*";
                // setError({...error, "pw" : errorValue});
            }
            if (id == array[i]) {
                var errorValue = value.length > 0 ? "" : "*";
                setError({...error, [id] : errorValue});
            }
            if (id == "country") {
                var errorValue = value == "canada" ? "" : "invalid"
                setError({...error, "country":errorValue});
            }

        }
    }

    return (
        <div>
            <h1> Form </h1>
            <p>name:{formValue.uName} pw:{formValue.pw} country:{formValue.country}</p>
            <p>name:</p><input id="uName" onChange={onChange}/>
            <ErrorMessage message={error.uName}/>
            <p>pw:</p><input id="pw" onChange={onChange}/>
            <ErrorMessage message={error.pw}/>
            <ErrorMessage message={error.pwMessage}/>
            <p>country:</p><input id="country" onChange={onChange}/>
            <ErrorMessage message={error.country}/>
        </div>
    );

}

class ControlledComponent extends React.Component {
    constructor() {
        super();
        this.state = { error: {} };
    }

    onChange = (e) => {
        var id = e.target.id;
        var value = e.target.value;
        this.setState({ [id]: value });
        var array = ["uName", "pw", "country"];
        for (var i = 0; i < array.length; i++) {
            this.validateValue(id, value, array[i]);
        }
    }
    validateValue = (id, value, element) => {
        if (id == element) {
            this.state.error[id] = value.length > 0 ? "" : "*";
        }
        if (id == "pw") {
            this.state.error[id] = "hello";
        }
        if (id == "country") {

            this.state.error["invalidCountry"] = value == "Canada" ? "" : "Invalid Country";
        }
    }

    render() {
        return (
            <div>
                <h1>ControlledComponent</h1>
                <p>name:{this.state.uName} pw:{this.state.pw} country: {this.state.country}</p>
                <p>name: <input id="uName" onChange={this.onChange} />
                    <ErrorMessage message={this.state.error.uName} /></p>
                <p>pw: <input id="pw" onChange={this.onChange} />
                    <ErrorMessage message={this.state.error.pw} /></p>
                <p>country: <input id="country" onChange={this.onChange} />
                    <ErrorMessage message={this.state.error.country} />
                    <ErrorMessage message={this.state.error.invalidCountry}/>
                </p>
            </div>
        );
    }
}
const ErrorMessage = (props) => {
    return (
        <span style={{ color: "red" }}>{props.message}</span>
    );
}

class UncontrolledComponent extends React.Component {
    constructor() {
        super();
        this.name = React.createRef();
        this.pw = React.createRef();
        this.country = React.createRef();
    }

    onClick = () => {
        alert("name: " + this.name.current.value
            + "\n pw: " + this.pw.current.value
            + "\n country: " + this.country.current.value
        );
    }

    render() {
        return (
            <div>
                <h1>UncontrolledComponent </h1>
                <p>name <input id="name" ref={this.name} /></p>
                <p>pw <input id="pw" ref={this.pw} /></p>
                <p>country <input id="country" ref={this.country} /></p>
                <input type={"button"} value="submit" onClick={this.onClick} />
            </div>
        );
    }

}



export default App;