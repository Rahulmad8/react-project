import React, { Component } from 'react';
import CourseList from './CourseList'

export default class Course extends Component {
    state ={
        total: 0
    }
     
    sumPrice = (price) => {
        this.setState({
            total: this.state.total + price
        })
    }

    render() {
        console.log(this.props.course);
        var FullCourse = this.props.course.map( (item, i) => {
            return <CourseList name={item.name} key= {i} price={item.price} sumPrice = {this.sumPrice} active={item.active}/>
        }) 
        return (
            <div >
                {FullCourse}
                <div>
                    <p>Total : {this.state.total} </p>
                </div>
            </div>
        )
    }
}
