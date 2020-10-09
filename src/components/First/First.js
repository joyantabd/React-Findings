import React, { Component } from 'react'


class First extends Component{
    

    render() {
        return (
            <div>
                <h3>My name is {this.props.name}</h3>
                <p>I am a {this.props.occupation}</p>
                <p>I am a {this.props.job}</p>
            </div>
        )
        
    }
    

}

export default First