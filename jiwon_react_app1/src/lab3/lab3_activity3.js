import React from 'react';
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state= {userName: this.props.userName, backcolor: this.props.backcolor};
        this.onClicked = this.onClicked.bind(this);        
    }
    static getDerivedStateFromProps(nextProps, prevState){

    }
    onClicked(){
        this.setState({backcolor:"blue"});
    }
    render(){
        return <div onClick={this.onClicked} 
        style={{backgroundColor: this.state.backcolor, fontSize: "1.5em"}}>
            Hello dear {this.state.userName}!
        </div>
    }
}

class App extends React.Component {
    render(){
        return(
            <User userName="Joe" backcolor="red"/>
        );
    }
}
export default App;