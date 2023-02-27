import React, { Component } from 'react';

export class index extends Component {
    render() {
        let { myName, num1, num2 } = this.props;
        return (
            <div>
                <h3>{myName ? myName : ''}</h3>
                <h4>{`${num1} + ${num2} = ${num1 + num2}`}</h4>
            </div>
        );
    }
}

export default index;
