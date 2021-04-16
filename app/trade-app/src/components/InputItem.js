import React from "react"

class InputItem extends React.Component 
{
    state = {
        have: "",
        want: ""
    };

    onChange = e => 
    {
        console.log("Hello there");
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleSubmit = e => 
    {
        e.preventDefault();
        if(this.state.have.trim() && this.state.want.trim())
        {
            this.props.addItemProps(this.state.have, this.state.want);
            this.setState(
                {
                    have: "",
                    want: ""
                }
            )   
        }
        else
        {
            alert("Please fill both have and want!");
        }
        
    }

    render() {
        return (
        <form onSubmit = {this.handleSubmit}>
            <input  type="text" placeholder="Add Have..." 
                    value = {this.state.have} 
                    onChange = {this.onChange} 
                    name = "have"
                    />
            <input  type="text" placeholder="Add Want..." 
                    value = {this.state.want} 
                    onChange = {this.onChange} 
                    name = "want"
                    />
            <button>Submit</button>
        </form>
        )
    }
}
export default InputItem