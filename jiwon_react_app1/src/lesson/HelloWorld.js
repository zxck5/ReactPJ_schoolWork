import React, { Component } from "react";
import imgA from './img/me.jpg';
import styles from "./App.module.css"

class HelloWorld extends Component {

    render() {

        return (

            <div className="helloContainer">

                <h1 className={styles.helloContainer}>AboutMe</h1>
                <AboutMe/>

            </div>
        )
    }
}
//PartB activity2
// class App extends React.Component {
//     render() {
//         var i = 1;
//         return (
//             <div>
//                 <h1>{i == 1 ? 'True!' : 'False'}</h1>
//             </div>
//         );
//     }
// }
//PartB activity3
// class App extends React.Component{
//     render(){
//         var myStyle = { fontSize: 100, color: '#FF0000' }
//         return (
//             <div>
//                 <h1 style={myStyle}>Header</h1>
//                 {/* {//End of the line Comment...}
//                 {/*Multi line comment...*/ }
//             </div> );

//     }
// }
//PartB activity4
// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//    return element;
// }



function AboutMe(){

    var imgStyle = {width: '400px', height: '500px'};
    var img = <img style={imgStyle} src = {imgA}/>
    return <div>
                {img}<br></br><span style={{color : 'blue'}}>This is me <br></br> I changed the text color.</span> 
                <div style={{border: '1px solid red',width: '300px',backgroundColor: 'green'}}>
                    <span>My name is Jiwon</span>
                    <div><span>hobbies : workout, playing piano</span></div>
                </div>

            </div>
}

export default HelloWorld;