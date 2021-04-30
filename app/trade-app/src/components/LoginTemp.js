import React from "react"

class LoginTemp extends React.Component 
{

    state = {
        name: "",
    };

    onChange = e => 
    {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleSubmit = e => 
    {
        e.preventDefault();
        sessionStorage.setItem("loggedIn", true);
        sessionStorage.setItem("userName", this.state.name);
        this.forceUpdate();
        //this.props.setUserNameProp(this.state.name);
    }


    render() 
    {
        return (
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input  type="text" placeholder="Choose username.." 
                                value = {this.state.name} 
                                onChange = {this.onChange} 
                                name = "name"
                                />
                        <button>Submit</button>
                    </form>
                </div>
        );
      }
}
export default LoginTemp;