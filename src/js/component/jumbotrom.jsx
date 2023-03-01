import React from "react";
import PropTypes from "prop-types";

//create your first component
const Jumbotrom = (props) => {
    return (
        <div className="container">
            <div className="p-5 bg-light rounded">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <button type="button" className="btn btn-primary">{props.label}</button>
            </div>
        </div>
    );
};

Jumbotrom.propTypes = {
	title: PropTypes.string,
    description: PropTypes.string,
    label: PropTypes.string,    
};

export default Jumbotrom;
