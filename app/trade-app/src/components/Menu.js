import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import LogOutTemp from "./LogOutTemp"

class Menu extends React.Component 
{
    render() 
    {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/market">Market</Link>
                    </li>
                </ul>
            </nav>
        );
      }
}
export default Menu;