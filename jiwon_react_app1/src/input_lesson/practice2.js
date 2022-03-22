import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };
        this.state = { username1: '' };
        this.state = { err: {} }

    }



    myChangeHandler = (event) => {
        this.setState({ username: event.target.value });
    }


    myChangeHandler1 = (event1) => {
        this.setState({ username1: event1.target.value })
        
        
       
        if (isNaN(event1.target.value)) {
            this.state.err["message"] = "Please Enter Number"
            this.state.err.message2 = ""
        }else {
            this.state.err.message = ""
            // var age = event1.target.value  <= 100 && event1.target.value  >= 30 ? true : false;
            if (!(event1.target.value  <= 100 && event1.target.value  >= 30)) {
             
                this.state.err["message2"] = "between 30 and 100"
            }
            else {
                this.state.err.message2 = ""
            };
        }
        
    }

    myAlert = () => {

        return (
            alert("Hello" + this.state.username  + this.state.username1 )

        );
    }
    render() {
        return (
            <form>
                <h1>Hello {this.state.username} {this.state.username1} </h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    onChange={this.myChangeHandler}
                />
                <p>Enter Your age:</p>
                <input
                    onChange={this.myChangeHandler1}
                />
                <Error message={this.state.err.message} />
                <Error message={this.state.err.message2} />
                <br></br>
                <br></br>
                <button type="button" onClick={this.myAlert}>Submit</button>
            </form>
        );
    }
}
var Error = (props) => {
    return (
        <span> {props.message} </span>
    )
}

export default App;