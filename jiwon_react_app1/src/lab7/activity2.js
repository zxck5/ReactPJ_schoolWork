import React, { useState } from "react";

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Form1 />
            </div>
        )
    }

}

const Form1 = () => {
    const [formValue, setValues] = useState({});
    const [errorValue, setError] = useState({});

    const onChange = (e) => {
        var inputId = e.target.id;
        var value = e.target.value;
        setValues({ ...formValue, [inputId]: e.target.value });
        // alert("name: "+formValue.name);
        // alert("age: "+formValue.age);
        // alert("inputId: "+formValue.inputId);
        // alert("44: " + formValue[inputId]);
        if (inputId == "age") {
            if (isNaN(value)) {
                setError({...errorValue, "ageMessage" : "Your age must be a number"});
            } else {
                setError({...errorValue, "ageMessage" : ""});
                
            }
        }
        if (inputId == "checkBox") {
            setValues({...formValue, [inputId]: e.target.checked});
        }

    }
    
    const onClick = (e) => {
        e.preventDefault();
        

        var age = formValue.age >= 30 && formValue.age <= 100 ? true : false;

        if (age && formValue.name !== undefined && formValue.checkBox &&formValue.name != "") {
            alert("name:" + formValue.name + "\nage:" + formValue.age);

        } else {    
            alert("type your name again");
        }
        if (!age) {
            alert("your age should be between 30 and 100")
        }

        if (!formValue.checkBox) {
            setError({...errorValue, "checkMessage" : "you need to confirm the terms and conditions!"});
        } else {
            setError({...errorValue, "checkMessage" : ""});
        }

    }

    return (
        <form method="get" onSubmit={onClick}>
            <h1>Hello {formValue.name} {formValue.age}</h1>
            <div>Enter your name</div>
            <input id="name" name="name" onChange={onChange} />
            <div>Enter your age</div>
            <input id="age" name="age" onChange={onChange} />
            <ErrorMessage message={errorValue.ageMessage}/><br/>
            <span>I agree to the Fabric Software and Services Agreement</span><input id="checkBox" type="checkbox" onChange={onChange}></input>
            <br/><ErrorMessage message={errorValue.checkMessage}/>
          
            <div>
                <input type="submit" value="submit"/>
            </div>
        </form>
    )
}

const ErrorMessage = (props) => {
    return(
        <span style={{fontWeight:"bold"}}>{props.message}</span>
    );
}



export default App;
