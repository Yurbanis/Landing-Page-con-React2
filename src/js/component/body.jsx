import React from "react";
import PropTypes from "prop-types";
//create your first component
const Body = (props) => {
  return (
    <div className="container card-group mt-3">
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
      <div className="col-md-3 card text-center m-2">
        <img src="https://picsum.photos/id/14/500/325" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title1}</h5>
          <p className="card-text">{props.description1}</p>
        </div>
        <div className="card-footer">
          <button type="button" className="btn btn-primary">{props.label1}</button>
        </div>
      </div>
      <div className="col-md-3 card text-center m-2">
        <img src="https://picsum.photos/id/16/500/325" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title2}</h5>
          <p className="card-text">{props.description2}</p>
        </div>
        <div className="card-footer">
          <button type="button" className="btn btn-primary">{props.label2}</button>
        </div>
      </div>
      <div className="col-md-3 card text-center m-2">
        <img src="https://picsum.photos/id/19/500/325" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title3}</h5>
          <p className="card-text">{props.description3}</p>
        </div>
        <div className="card-footer">
          <button type="button" className="btn btn-primary">{props.label3}</button>
        </div>
      </div>
    </div>
  );
  
};

Body.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
  title1: PropTypes.string,
  description1: PropTypes.string,
  label1: PropTypes.string,
  title2: PropTypes.string,
  description2: PropTypes.string,
  label2: PropTypes.string,
  title3: PropTypes.string,
  description3: PropTypes.string,
  label3: PropTypes.string,
};

export default Body;
