import React, { useState } from "react";


class MovieList extends React.Component {
    render() {
        return (
            <div>
                <h1>My movies:</h1>
                <GetMovie name="Movie1" visible={false} />
                <GetMovie name="Movie2" visible={false} />
                <GetMovie name="Movie3" visible={false} />
                <GetMovie name="Movie4" visible={false} />
                <GetMovie name="Movie5" visible={false} />
            </div>
        );
    }
}
// class GetMovie extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: this.props.name,
//             visible: this.props.visible
//         };
//         this.getVisible = this.getVisible.bind(this);
//         this.updateName = this.updateName.bind(this);

//     }
//     // static getDerivedStateFromProps(props, state) {

//     //     alert("getDerivedStateFromProps is Triggered");
//     // }
//     // componentDidMount() {
//     //     alert("componentDidMount is Triggered");
//     // }
//     // componentDidUpdate() {
//     //     alert("componentDidUpdate is Triggered");
//     // }

//     updateName(e) {
//         this.setState({ name: e.target.value });
//     }
//     getVisible() {
//         this.setState({ visible: !(this.state.visible) });
//     }


//     render() {
//         return <div>
//             {this.state.visible && <div><span>type your favorite movie</span><input type="text" value={this.state.name} onChange={this.updateName} /></div>} 
//             {!(this.state.visible) && <span>{this.state.name}</span>}
//             <button onClick={this.getVisible}>{this.state.visible ? "edit" : "click"}</button>

//         </div>
//     }

// }


const GetMovie = (props) => {
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState(props.name);

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    // const a = <input type="text" key="name1" value={name} onChange={onChangeName}/>;

    // const Span1 = () => {
    //     return (
    //         <div>
    //             <span>type your favorite movie</span>
    //             {a}
    //         </div>
    //     );
    // }

    return (
        <div>
            {<Span1 name={name} />}
            {!visible && <span>{name}</span>}
            <button onClick={() => { 
                setVisible(!visible); 
                
            
            }}>{visible ? "edit" : "click"}</button>

        </div>
    );
}
// hook component
// const Span1 = (props) => {
//     const [name, setName] = useState(props.name);
//     const onChangeName = (e) => {
//         setName(e.target.value);
//     }
//     return (
//         <div>
//             <span>type your favorite movie</span><input type="text" value={name} onChange={onChangeName} />
//         </div>
//     );
// }
class Span1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: props.name };

    }
    static getDerivedStateFromProps(props, state) {
        // this.setState({ name: props.name });
        if (props.myPropsState !== state.prevPropsState){
            return {name : props.name};
        } else {
            return null;
        }
        
    }
    onChangeName = (e) => {
        this.setState({name:e.target.value});
    }

    render() {
        return <div>
                <span>type your favorite movie</span><input type="text" value={this.state.name} onChange={this.onChangeName} />
             </div >
    }


}


export default MovieList;