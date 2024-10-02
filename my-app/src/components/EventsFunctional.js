import React from 'react'

function EventsFunctional() {
    function clickHandler() {
        console.log('Button clicked - Functional component')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click Me - Functional component</button>
        </div>
    )
}

export default EventsFunctional