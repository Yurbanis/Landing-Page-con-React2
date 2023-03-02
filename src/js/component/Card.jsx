import React from "react";
import PropTypes from "prop-types";
//create your first component
const Card = (props) => {
  return (
    
      <div className="col-md-3 card text-center m-2">
        <img src="https://picsum.photos/id/13/500/325" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <div className="card-footer">
          <button type="button" className="btn btn-primary">{props.label}</button>
        </div>
      </div>
      
    
  );
  
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
 
};

export default Card;
