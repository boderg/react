import React from 'react';

// function FunctionalGreetingWithProps() {
//     return <h1>Hello from React!</h1>
// }

const FunctionalGreetingWithProps = (props) => <h1>{props.greeting}, {props.name} age {props.age} from {props.location}.</h1>;

export default FunctionalGreetingWithProps;