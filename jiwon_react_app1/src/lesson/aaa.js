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

const GetMovie = (props) => {

    const [visible, setVisible] = useState(false);

    return (

        <div>

            {<Span1 name={props.name} visible={visible} />}

            <button onClick={() => {

                setVisible(!visible);

            }}>{visible ? "edit" : "click"}</button>

        </div>

    );

}



class Span1 extends React.Component {

    constructor(props) {

        super(props);

        this.state = { name: props.name, visible: props.visible };

    }



    // static getDerivedStateFromProps(props, state) {

    //   // this.setState({ name: props.name });

    //   if (props.myPropsState !== state.prevPropsState) {

    //     return { name: props.name,visible:props.visible };

    //   } else {

    //     return null;

    //   }



    // }

    onChangeName = (e) => {

        this.setState({ name: e.target.value });

    }

    render() {

        if (!this.props.visible) {
            
            return <div>{this.state.name}</div>
        }
        return (<div>

            <span>type your favorite movie</span><input type="text" value={this.state.name} onChange={this.onChangeName} />

        </div >);

    }



}
export default MovieList;