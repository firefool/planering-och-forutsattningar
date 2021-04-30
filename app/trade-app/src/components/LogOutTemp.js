import React from "react"

class LogOutTemp extends React.Component 
{
    handleSubmit = e => 
    {
        console.log("test");
        e.preventDefault();
        sessionStorage.clear();
        sessionStorage.setItem("loggedIn", false);
        this.forceUpdate();
        //this.props.setUserNameProp(this.state.name);
    }


    render() 
    {
        return (
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <button>Log Out</button>
                    </form>
                </div>
        );
      }
}
export default LogOutTemp;