import React, { Component } from "react";
import "./../Styles/Wizard1.css";
import header_logo from "./../images/header_logo.png";
import axios from 'axios'
import active from "./../images/step_active.png";
import inactive from "./../images/step_inactive.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  updatePropertyName,
  updatePropertyDescription,
  cancel
} from "./../../Dux/reducer";

class Wizard1 extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    axios
      .get("/checkIfLoggedIn")
      .then()
      .catch(res => {
        console.log("error");
        this.props.history.push("/");
      });
  }
  logout(){
    axios.put('api/logout')
    .then(() => {

    } )
  }

  render() {
    return (
      <div className="root">
        <div className="Wizard__router_container">
          <div className="Header__parent dark_green_bgc">
            <div className="Header__child">
              <div className="Header__left_container">
                <img src={header_logo} alt="logo" />
                <span className="Header__left_span open-sans-bold">Houser</span>
                <span className="Header__left_span open-sans">Dashboard</span>
              </div>
              <div className="Header__right_container">
              <Link className="link" to="/" onClick={e => this.logout()}>
              Logout{" "}
            </Link>{" "}
              </div>
            </div>
          </div>
          <div className="Wizard__step_container">
            <div className="Wizard__stepHeader_container">
              <span className="open-sans-bold Wizard__stepHeader_span">
                Add new listing
              </span>
              <button className="open-sans-bold Wizard__stepHeader_btn pink_bgc">
                <Link className="link" to="/Dashboard" onClick={this.props.cancel}>
                  Cancel{" "}
                </Link>
              </button>
            </div>
            <div className="Wizard__stepHighlight_container">
              <span className="step1">Step 1</span>
              <div className="StepHighlight__container">
                <img src={active} alt="active" />
                <img src={inactive} alt="inactive" />
                <img src={inactive} alt="inactive" />
                <img src={inactive} alt="inactive" />
                <img src={inactive} alt="inactive" />
              </div>
            </div>
            <div className="Step__container">
              <div className="Step1__name_container">
                <span className="open-sans-bold Step__input_header Step1__name_header">
                  Property Name
                </span>
              </div>
              <input className="Step__input dark_green_border open-sans" 
              value={this.props.propertyName}
              onChange={e => this.props.updatePropertyName(e.target.value)} />
              <div className="Step1__description_container">
                <span className="open-sans-bold Step__input_header Step1__description_header">
                  Property Description
                </span>
              </div>
              <textarea 
               className="Step__input dark_green_border open-sans Step1__description_input"
               value={this.props.propertyDescription} 
               onChange={e => this.props.updatePropertyDescription(e.target.value)}/>
              <div className="Step1__btn_container">
                <a className="Step__btn_next darkest_green_bgc" href="#/wizard2">
                  Next Step
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {propertyDescription, propertyName} = state
  return {
    propertyDescription,
    propertyName
  }

}

export default connect(mapStateToProps, {
  updatePropertyDescription,
  updatePropertyName,
  cancel
})(Wizard1);
