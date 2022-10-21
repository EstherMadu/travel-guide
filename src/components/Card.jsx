import React from "react";

function Card(props) {
  console.log(props.item);
  return (
    <div>
      <div className="hero">
        <div>
          <img
            src={props.item.countryImg}
            alt="travel-image"
            className="hero-image"
          />
        </div>
        <div className="hero-text">
          <span>
            <img src="/images/location.png" className="location" />
          </span>
          <span className="country">{props.item.country}</span>
          <span>
            <a href={props.item.location} className="maps" target="_blank">
              View on Google Maps
            </a>
          </span>
          <h1>{props.item.state}</h1>
          <h3>{props.item.date}</h3>
          <p>{props.item.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Card;
