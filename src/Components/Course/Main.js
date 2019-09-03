import React, { Component } from 'react';
import Course from './Course'

export default class Main extends Component {
    render() {
        var Courses = [
            {name: "front-end", price: 180},
            {name: "front-end", price: 180},
            {name: "front-end", price: 180},
            {name: "front-end", price: 180},
            
        ]

        return (
            <div>
                <Course course={Courses} />
            </div>
        )
    }
}
