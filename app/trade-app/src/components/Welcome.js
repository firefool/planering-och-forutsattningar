import React from "react"

class Welcome extends React.Component 
{
    render() 
    {
        return (
                <div>
                    <h3>Welcome! {sessionStorage.getItem("userName")}</h3>
                </div>
        );
      }
}
export default Welcome;