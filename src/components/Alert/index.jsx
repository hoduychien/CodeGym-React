import React from 'react';

import './alert.css';

const index = (props) => {
    console.log(props);

    return (
        <>
            <div className={`alert ${props.type}  ${props.toggle}`}>
                <div className="alert-content">
                    <div className="alert-icon">
                        <i className="fa-solid fa-bell"></i>
                    </div>
                    <div className="alert-title">
                        <h4>{props.type}</h4>
                        <span>{props.text}</span>
                    </div>
                </div>

                <div className="alert-close" onClick={() => props.handleCloseAlert()}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
        </>
    );
};

export default index;
