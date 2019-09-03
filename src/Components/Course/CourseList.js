import React, { Component } from 'react'

export default class CourseList extends Component {
    state ={
        active: false
    }
    HandleClick =() => {
        var active = !this.state.active;  
        this.setState({
            active: active  
        });
        this.props.sumPrice( active ? this.props.price : -this.props.price)
    }
    // Reduce =() => {
    //     this.props.sumPrice(-this.props.price)
    // }
    render() {
        console.log(this.props.name);
        
        return (
            <div>
               <p onClick={this.HandleClick}>{this.props.name}  <b>{this.props.price}</b></p> 
               <button onClick={this.Reduce
            }></button>
            </div>
        )
    }
}
