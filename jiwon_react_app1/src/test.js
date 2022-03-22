// Create a new FUNCTION component, name it {YourName}Comp. For example, if your name is John, the component 
//name should be JohnComp. This component should display your name and current program of study on the page. 
//This component should then be used in your program
// Add a CSS or inline style to change the text style: font_size “45” with font family “Brush Script MT (cursive)”

import React from "react";


const JiwonComp = () => {
    
    return (
        <div>
            <span style={{fontSize : "45", fontFamily: "cursive"}}>name : Jiwon Jeong</span>
            <br/>
            <span style={{fontSize : "45", fontFamily: "cursive"}}>current program : CPAN</span>

        </div>
    );

}



export default JiwonComp;
