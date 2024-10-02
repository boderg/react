import React from 'react';

class StatefulGreeting extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            introduction: 'Hello',
            buttonText: 'Exit',
        };

        this.handleClick = this.handleClick.bind(this);
    }

    // methods 1,2,3 handleClick() {
    //     this.setState({
    //         introduction: 'Goodbye',
    //         buttonText: 'Enter',
    //     });
    //     console.log(this.state.introduction);
    //     console.log(this.state.buttonText);
    // }

    handleClick = () => {
        this.setState({
            introduction: 'Goodbye',
            buttonText: 'Enter',
        });
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
    }
    
    render() {
        return (
            <div>
                <h1>
                    {this.state.introduction} {this.props.greeting} {this.props.name}
                </h1>
                {/* method 1: <button onClick={() => this.handleClick()}>
                    {this.state.buttonText}
                </button> */} 
                {/* or */}
                {/* method 2: <button onClick={this.handleClick.bind(this)}>
                    {this.state.buttonText}
                </button> */}
                {/* method 3: <button onClick={this.handleClick}>
                    {this.state.buttonText}
                </button> */}
                <button onClick={this.handleClick}>
                    {this.state.buttonText}
                </button>
            </div>
        );
    }
}

export default StatefulGreeting;