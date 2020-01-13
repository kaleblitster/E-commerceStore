
import React from 'react';
import Home from "./Home";
import Modal from "./Modal";

class Cards extends React.Component{
    render() {
        return(
            <div className="card">
                <div>
                    <img className="card-img-top" src={this.props.img} alt="Card image cap"/>
                </div>
                    <div className="card-body">
                        <div className="blackline">

                        </div>
                        <h5 className="card-title">{this.props.title}</h5>

                        {/*<p className="card-text">{this.props.des}</p>*/}
                        <h5>${this.props.price}</h5>
                        <button tag={<Modal/>} to={<Modal/>} > learn </button>
                    </div>

            </div>

        )
    }
}


export default Cards;