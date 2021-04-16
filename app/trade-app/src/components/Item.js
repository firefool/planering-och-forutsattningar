import React from "react"
class Item extends React.Component 
{
    render() 
    {
        return (
                <div className="item" key = {this.props.item.id}>
                    <li>
                        Have:  
                        {this.props.item.have}
                    </li>
                    <li>
                        Want:
                        {this.props.item.want}
                    </li>
                    <button onClick = {() => this.props.deleteItemProps(this.props.item.id)}>
                        X
                    </button>
                </div>
        );
      }
}
export default Item;