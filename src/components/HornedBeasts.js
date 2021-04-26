import React from 'react';
class HornedBeastes extends React.Component{
    render(){
        return(
            <section>
                <h1>{this.props.title}</h1>
                <img src = {this.props.imageUrl} alt = {this.props.title} title = {this.props.title}></img>
                <p>{this.props.description}</p>
            </section>
        )
    };
}

export default HornedBeastes;