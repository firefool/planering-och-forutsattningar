import React from "react"

import Item from "./Item"

class ItemList extends React.Component 
{
    render() 
    {
        return (
            <ul>
            {this.props.items.map(item => (
               <Item 
                    key = {item.id} 
                    item = {item} 
                    deleteItemProps = {this.props.deleteItemProps}
                    />
            ))}
        </ul>
        );
      }
}
export default ItemList;