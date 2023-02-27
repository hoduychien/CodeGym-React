import React from 'react';

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            couter: 10,
            data: [1, 1, 1],
            isShow: true,
            user: {
                name: 'chien',
            },
        };
    }
    increment = (e) => {
        let { couter } = this.state;
        this.setState({
            // isShow: !this.state.isShow,
            couter: couter + e,
        });
    };

    changeName = () => {
        this.setState({
            user: {
                name: 'chien duy',
            },
        });
    };

    render() {
        let { couter, data, isShow, user } = this.state;

        return (
            <>
                {isShow && (
                    <p>
                        {user.name} {couter}
                    </p>
                )}

                <button onClick={() => this.increment(3)}>increment</button>
                <button onClick={this.changeName}>increment</button>
            </>
        );
    }
}

export default index;
