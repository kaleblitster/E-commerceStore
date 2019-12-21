import React from 'react';

import Path from './components/Router'

import './App.css'

class App extends React.Component {
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
            <li>
              <Path/>
            </li>
            {items.map(item => (
                <li key={item.id}>
                  {item.title} {item.description}
                  {item.img} {item.price}
                  {item.rating} {item.category}
                </li>
            ))}
          </ul>
      );
    }
  }
}
export default App;

