import React from 'react';
import './style.css';

const index = () => {
    return (
        <div className="form-signin-main">
            <form className="form-signin form-group" method="GET">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
                    alt=""
                    className="form-signin-logo"
                />
                <div className="form-signin-title d-flex p-3">
                    <h5>Please sign in</h5>
                </div>
                <div className="form-item form-signin-item">
                    <input
                        type="email"
                        className="form-control shadow-none rounded-0 border-bottom-0"
                        placeholder="Email address"
                        id="email"
                        name="email"
                        pattern="^\S+@\S+\.\S+$"
                    />
                </div>

                <div className="form-item form-signin-item">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control shadow-none rounded-0"
                        placeholder="Password"
                    />
                </div>
                <div className="form-item p-3">
                    <input type="checkbox" id="remember" />
                    <label className="p-1" htmlFor="remember">
                        Remember me
                    </label>
                </div>
                <div className="form-item pb-3">
                    <button className="form-signin-btn btn btn-primary">Sign in</button>
                </div>

                <p className="form-signin-copy mt-1 text-muted">© 2017–2021</p>
            </form>
        </div>
    );
};

export default index;
