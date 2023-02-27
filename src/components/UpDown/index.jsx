import React, { Component } from 'react';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            isLogin: false,
            color: '#fff',
        };
    }
    decrease = () => {
        let { num } = { ...this.state };
        this.setState({
            num: num - 1,
        });
    };
    increase = () => {
        let { num } = { ...this.state };
        this.setState({
            num: num + 1,
        });
    };
    handleLogin = () => {
        let { isLogin } = { ...this.state };
        this.setState({
            isLogin: !isLogin,
        });
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                color: '#eff3737',
            });
        }, 3000);
    }

    render() {
        let { num, isLogin, color } = this.state;
        return (
            <div className="d-flex">
                <button onClick={this.decrease}>Decrease</button>
                <h3 className="p-20">{num}</h3>
                <button onClick={this.increase}>Increase</button>

                <div className="login">
                    {isLogin ? (
                        <>
                            <h3>Welcome</h3>
                            <button onClick={() => this.handleLogin()}>Logout</button>
                        </>
                    ) : (
                        <>
                            <h3>Please Login</h3>
                            <button onClick={() => this.handleLogin()}>Login</button>
                        </>
                    )}
                </div>
            </div>
        );
    }
}
