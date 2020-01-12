
import React from 'react';
import Path from "./Router";
import Cards from "./Cards";
import Filter from './Filter';

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
    listProducts = () => {
        this.setState(state => {
            if (state.sort !== '') {
                state.products.sort((a, b) =>
                    (state.sort === 'lowestprice'
                        ? ((a.price > b.price) ? 1 : -1)
                        : ((a.price < b.price) ? 1 : -1)));
            } else {
                state.products.sort((a, b) => (a.id > b.id) ? 1 : -1);
            }
            if (state.size !== '') {
                return { filteredProducts: state.products.filter(a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0) };
            }
            return { filteredProducts: state.products };
        })
    }
    handleSortChange = (e) => {
        this.setState({ sort: e.target.value });
        this.listProducts();
    }
    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
        this.listProducts();
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
                    <Filter cat={this.state.category} handleChangeCategory={this.handleChangeCategory}
                    />
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