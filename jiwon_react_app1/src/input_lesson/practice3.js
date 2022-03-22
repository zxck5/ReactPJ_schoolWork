import React, { Component, useRef, useState } from "react";

class App extends React.Component {
    id = 0;
    state={
        memberInfo: []
    };
    handleCreate = (data) => {
        const {memberInfo} = this.state;
        this.setState({
            memberInfo: memberInfo.concat({
                ...data,
                id : this.id++,
            }),
        })
    };


    render(){
        const {memberInfo} = this.state;
        return(
            <div>
                <ControlledComponenet onCreate = {this.handleCreate} memberData = {memberInfo}/>
                <p></p>
                <span>
                    {JSON.stringify(memberInfo)}
                </span>
                <hr/>
                <UncontrolledComponent/>
                <hr/>
                <Form onCreate= {this.handleCreate} memberData = {memberInfo}/>

            </div>
        )
    } 

}
const Form=(props)=> {
    const [formValues, setFormValues] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const onSubmit=(e)=>{
        e.preventDefault();
        alert("id: "+formValues.user_id + "pw: "+formValues.user_pw + JSON.stringify(props.memberData));
        props.onCreate({
            user_id : formValues.user_id,
            user_pw : formValues.user_pw
        })


    }
    const onChange=(e)=>{

        var name = e.target.name;
        var value = e.target.value;
        setFormValues({...formValues,[name] : value});
    }

    return (

        <form method="get" onSubmit={onSubmit}>
            <div>Hello {formValues.user_id} pw {formValues.user_pw}</div>
            id: <input name="user_id" onChange={onChange}/>
            <p></p>
            pw: <input name="user_pw" onChange={onChange}/>
            <input type="submit"/>
        </form>
    ) 
}



class ControlledComponenet extends React.Component{
    constructor() {
        super();
        this.state = {errors:{}};
        
    }

    onChange = (event)=> {
        var id=event.target.id;
        var value = event.target.value;
        this.setState({[id]:value});
        var errors_new = this.state.errors;
        var arr = ['user_id','user_pw']
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === id) {
                errors_new[id] = value.length > 0 ? "" : "*";
            }
        }
        this.setState({errors : errors_new});

    }
    onSubmit =(e) => {
        alert("id: " + this.state.user_id + "pw: " + this.state.user_pw + JSON.stringify(this.props.memberData))
        e.preventDefault();
        this.props.onCreate({
            user_id : this.state.user_id,
            user_pw : this.state.user_pw
        })
        this.setState({
            user_id : '',
            user_pw : ''
        })
    }

    render() {
        return(
            <div>
                <form method="get" onSubmit={this.onSubmit}>
                    <div>id : {this.state.user_id} pw : {this.state.user_pw}</div>
                    <p>Controlled Component</p>
                    id : <input id="user_id" onChange={this.onChange} />
                    <Error message = {this.state.errors.user_id}/>
                    <p></p>
                    pw : <input id = "user_pw" onChange={this.onChange} />
                    <Error message = {this.state.errors.user_pw}/>
                    <input type={"submit"} value={"button"}/>
                </form>

            </div>
        )
    }
}

const Error = (props) => {
    return (<span style={{ color: "red", paddingLeft: "5px" }}>{props.message}</span>);
}

class UncontrolledComponent extends React.Component {
    constructor() {
        super();
        this.id = React.createRef();
        this.pw = React.createRef();
    }
    onSubmit=()=>{
  
        alert("user_id: " + this.id.current.value + "user_pw: " + this.pw.current.value)
    }
    onChange= ()=>{

    }

    render() {
        // const id = this.id.current.value;
        return(
            <form method="get" onSubmit={this.onSubmit}>
                id: <input id="user_id" ref={this.id} onChange={this.onChange}/>
                <p></p>
                {/* <Error message = {id}/> */}
                pw: <input id="user_pw" ref={this.pw} onChange={this.onChange}/>
                {/* <Error message = {this.pw.current.value}/> */}
                <input type="submit" value="button"/>
            </form>
        )
    }
}

export default App;
