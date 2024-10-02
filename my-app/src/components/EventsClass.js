import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler() {
        console.log('Button clicked - Class component')
    }
    render() {
        return (
        <div>
            <button onClick={this.clickHandler}>Click Me - Class component</button>
        </div>
        )
    }
}

export default EventsClass