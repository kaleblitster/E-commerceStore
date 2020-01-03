
import React from 'react';
import Path from "./Router";
import Cards from "./Cards";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        };
    }


    componentDidMount() {
        fetch("https://my-json-server.typicode.com/tdmichaelis/json-api/products")
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    <div>
                        Home Page
                    </div>
                    {items.map(item => (
                        <Cards key={item.id}
                            img = {item.img}
                            title = {item.title}
                            des = {item.description}
                            price = {item.price}
                            cat = {item.category}
                        />
                    ))}
                </ul>
            );
        }
    }
}


export default Home;