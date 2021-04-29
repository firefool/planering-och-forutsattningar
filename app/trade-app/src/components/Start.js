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
            isLoggedIn: false,
            userName: ""
        }
    }

    setUserName = userName => 
    {
        console.log(userName);
        this.setState({
            userName: userName,
            isLoggedIn: true
        })
        console.log(this.state.isLoggedIn);
    }

    logIn(){
        this.state.isLoggedIn = true;
    }

    render() 
    {
        let welcomeMessage;
        const isLoggedIn = this.state.isLoggedIn;
        if(!isLoggedIn)
        {
            welcomeMessage = <LoginTemp setUserNameProp={this.setUserName}/>
        }
        else
        {
            welcomeMessage = <Welcome userNameProp={this.state.userName}/>
        }
        return (
            <div>
                <h1>START</h1>
                {welcomeMessage}
            </div>
            
        )
    }
}
export default Start