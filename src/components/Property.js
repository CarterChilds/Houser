import React, { Component } from "react";
import "./Styles/Property.css";
import delete_icon from "./images/delete_icon.png";
import axios from "axios";

export default class Property extends Component {
  constructor(props) {
    super(props);
  }

  deleteProperty() {
    axios
      .delete(`/api/deleteProperty/${this.props.id}`)
      .then(this.props.getProperties());
  }

  render() {
    const {
      propertyName,
      propertyDescription,
      address,
      city,
      state,
      zip,
      imageUrl,
      loanAmount,
      monthlyMortgage,
      desiredRent,
      id,
      getProperties
    } = this.props;
    console.log(this.props);
    return (
      <div className="Dashboard__property_container">
        <div className="Property__container">
          <div className="Property__img_container">
            <img className="Property__img" src={imageUrl} alt="#" />
          </div>
          <div className="Property__dd_container">
            <div className="Property__description_parent">
              <div className="Property__description_child">
                <span className="open-sans-bold Property__description_name" />
                {propertyName}
                <span className="open-sans Property__description_description" />
                {propertyDescription}
              </div>
            </div>
            <div className="Property__detail_parent">
              <div className="Propety__detail_child">
                <div className="open-sans-bold">Loan: ${loanAmount}</div>
                <div className="open-sans-bold">
                  Monthly Mortgage: ${monthlyMortgage}
                </div>
                <div className="open-sans-bold">
                  Recommended Rent: ${monthlyMortgage * 1.25}
                </div>
                <div className="open-sans-bold">
                  Desired Rent: ${desiredRent}
                </div>
                <div className="open-sans-bold">Address: {address} </div>
                <div className="open-sans-bold">City: {city} </div>
              </div>
              <img
                className="delete"
                src={delete_icon}
                alt="delete property"
                onClick={() => this.deleteProperty()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
