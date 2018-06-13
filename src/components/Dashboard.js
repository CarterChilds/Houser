import React, { Component } from "react";
import "./Styles/Dashboard.css";
import header_logo from "./images/header_logo.png";
import axios from "axios";
import Property from "./Property";
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      properties: [],
      filter: ''

    };
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.getProperties = this.getProperties.bind(this);
  }

  componentDidMount() {
    axios
      .get("/checkIfLoggedIn")
      .then()
      .catch(res => {
        console.log("error");
        this.props.history.push("/");
      });
    this.getProperties();
  }

  getProperties() {
    axios.get("/api/getProperties").then(res => {
      console.log(res.data);
      this.setState({ properties: res.data });
    });
  }

  logout(){
    axios.put('api/logout')
    .then(() => {

    } )
  }
  
  filterProperties(filter) {
    axios
      .get(`/api/filter/?filter=${this.state.filter}`)
      .then(response => this.setState({ properties: response.data }));
  }

  handleFilterChange(value){
    this.setState({filter: value})
  }

  render() {
    console.log(this.state.properties);
    let propertiesToDisplay = this.state.properties.map((property, index) => {
      return (
        <Property
          key={index}
          propertyName={property.prop_name}
          propertyDescription={property.description}
          address={property.address}
          city={property.city}
          state={property.state}
          zip={property.zip}
          imageUrl={property.image}
          loanAmount={property.loan_amount}
          monthlyMortgage={property.monthly_mortgage}
          desiredRent={property.desired_rent}
          id={property.id}
          getProperties={this.getProperties}
        />
      );
    });
    return (
      <div className="root">
        <div className="Dashboard__container white_bgc">
          <div className="Header__parent dark_green_bgc">
            <div className="Header__child">
              <div className="Header__left_container">
                <img src={header_logo} alt="logo" />
                <span className="Header__left_span open-sans-bold">Houser</span>
                <span className="Header__left_span open-sans">Dashboard</span>
              </div>
              <div className="Header__right_container">
                <span className="Header__right_span open-sans-bold">
                <Link className="link" to="/" onClick={e => this.logout()}>
                    Logout{" "}
                  </Link>{" "}
                </span>
              </div>
            </div>
          </div>
          <a href="/#/wizard1">
            <button className="Dashboard__button_new lightest_green_bgc open-sans-bold">
              Add New Property
            </button>
          </a>
          <div className="Filter__container">
            <span className="open-sans Filter__description">
              List properties with "desired rent" greator than: $
            </span>
            <input
              className="open-sans dark_green_border Filter__input"
              placeholder="0"
              value={this.state.filter}
              onChange={e => this.handleFilterChange(e.target.value)}
            />
            <button onClick={() => this.filterProperties()} className="open-sans lightest_green_bgc Filter__btn">
              Filter
            </button>
            <button  onClick={() => this.getProperties() }className="open-sans darkest_green_bgc Filter__btn Filter__btn_reset">
              Reset
            </button>
          </div>
          <div className="Dashboard__homeSpan_container">
            <span className="open-sans-bold"> Home Listings </span>
          </div>
          <div className="Dashboard__properties_container"
           />
        <div className='properties_container'>
      {propertiesToDisplay}
        </div>
        </div>
      </div>
    );
  }
}
