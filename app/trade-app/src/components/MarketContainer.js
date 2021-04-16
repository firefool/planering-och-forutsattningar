import React from "react"

import Header from "./Header"
import ItemList from "./ItemList"
import InputItem from "./InputItem"

import { v4 as uuidv4 } from "uuid"

class MarketContainer extends React.Component 
{

    state = 
    {
        items: [
            {
                id: uuidv4(),
                have: "Potatoes",
                want: "Green vegetables",                   
            },
            {
                id: uuidv4(),
                have: "Fresh fish",
                want: "Pickled food"
            },
            {
                id: uuidv4(),
                have: "Skilled woodworker",
                want: "Bread"
            }
        ]
    }

    deleteItem = id => {
        console.log("deleted", id)
        this.setState(
            {
                items: [
                    ...this.state.items.filter(item => 
                        {
                            return item.id !== id;
                        })
                ]
            }
        )
    }

    addItem = (have, want) =>
    {
        console.log(have, want);
        const newItem = 
        {
            id: uuidv4(),
            have: have,
            want: want
        };
        this.setState(
            {
                items: [...this.state.items, newItem]
            }
        )
    }


    componentDidMount()
    {
        const temp = localStorage.getItem("items");
        const loadedItems = JSON.parse(temp);
        if(loadedItems)
        {
            this.setState(
                {
                    items: loadedItems
                }
            )
        }
    }

    componentDidUpdate(prevProps, prevState)
    {
        if(prevState.items !== this.state.items)
        {
            const temp = JSON.stringify(this.state.items);
            localStorage.setItem("items", temp);
        }
    }

    render() 
    {
        return (
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputItem 
                            addItemProps = {this.addItem} />
                    <ItemList 
                            items = {this.state.items} 
                            deleteItemProps = {this.deleteItem} />
                </div>
            </div>
            
        )
    }
}
export default MarketContainer