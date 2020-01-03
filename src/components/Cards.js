
import React from 'react';
import Home from "./Home";


class Cards extends React.Component{
    render() {
        return(
            <div className="card">
                <div>
                    <img className="card-img-top" src={this.props.img} alt="Card image cap"/>
                </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.des}</p>
                        <h5>${this.props.price}</h5>
                        <button href="#" className="btn btn-primary">Buy this shit dawg</button>
                    </div>

            </div>

        )
    }
}


export default Cards;