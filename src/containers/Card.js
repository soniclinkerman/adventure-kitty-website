import React, { Component } from "react"
import "./Card.css"
class Card extends Component{
    constructor(){
        super()
        this.state = {
            hover: false
        }
    }

    render(){
        const toggleHover = () => {
            this.setState({hover: !this.state.hover})
        }

        const {image1, image2, name} = this.props;

        return(
            <div 
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            className="bg-light-white dib br3 ma2 grow bw2 shadow-5 card"
            style={this.state.hover ? {backgroundImage: `url(${image1})`} : {backgroundImage: `url(${image2})`} }
            >
                <div>
                    <h3>{name}</h3>
                </div>
            </div>
        )
    }
}

export default Card
