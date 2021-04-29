import React from "react"

class Welcome extends React.Component 
{
    render() 
    {
        return (
                <div>
                    <h3>Welcome! {this.props.userNameProp}</h3>
                </div>
        );
      }
}
export default Welcome;