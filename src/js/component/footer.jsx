import React from "react";
import PropTypes from "prop-types";

const mySuperStyles = {
"height": "50px",
"lineheight":"50px",
"bottom":"0",
"left":"0",
"width":"100%", 
}


//create your first component
const Footer = (props) => {
    return (
        <div style={mySuperStyles} className="text-center bg-dark text-white mt-3">
        <h5>{props.texto}</h5>
        </div>
    );
};

Footer.propTypes = {
	texto: PropTypes.string,
};

export default Footer;
