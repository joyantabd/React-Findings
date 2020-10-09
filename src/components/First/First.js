import React, { Component } from 'react'


class First extends Component{
    

    render() {
        return (
            <div>
                <h3>My name is {this.props.name}</h3>
                <p>I am a {this.props.email}</p>
                <p>I am a {this.props.address}</p>
            </div>
        )
        
    }
    

}

export default First