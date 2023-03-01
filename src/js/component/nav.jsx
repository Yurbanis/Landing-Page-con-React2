import React from "react";
import PropTypes from "prop-types";
//create your first component
const Nabvar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title1}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  d-flex justify-content-lg-end" id="navbarNav">
                        <ul className="navbar-nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{props.title2}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{props.title3}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{props.title4}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">{props.title4}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
Nabvar.propTypes = {
	title1: PropTypes.string,
    title2: PropTypes.string,
    title3: PropTypes.string, 
    title4: PropTypes.string,   
};
export default Nabvar;

