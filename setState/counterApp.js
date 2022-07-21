import React, { Component } from 'react';

class Myname extends Component {
    
    render() {
        console.log(this.state)//state is an object private to the component and is by default null  
        console.log(this.props)
        return (
            <div>
              <h1 style={{fontSize:"30px", color:"red"}}>My name is {this.props.data}</h1>  
            </div>
        );
    }
}

export default Myname;
