import React from "react"

class LoginTemp extends React.Component 
{

    state = {
        name: "",
        isLoggedIn: false
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
        this.props.setUserNameProp(this.state.name);
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