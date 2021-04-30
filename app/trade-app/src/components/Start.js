import React from "react"

import Header from "./Header"
import Footer from "./Footer"

import LoginTemp from "./LoginTemp"
import Welcome from "./Welcome"

class Start extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
        }
    }


    render() 
    {
        let welcomeMessage;
  
        welcomeMessage = <Welcome />

        return (
            <div>
                <h1>START</h1>
                {welcomeMessage}
            </div>
            
        )
    }
}
export default Start