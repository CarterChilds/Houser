import React, { Component } from "react";
import { Link } from "react-router-dom";
import header_logo from "./../images/header_logo.png";
import active from "./../images/step_active.png";
import inactive from "./../images/step_inactive.png";
import axios from 'axios';
import complete from "./../images/step_completed.png";
import { connect } from "react-redux";
import "./../Styles/Wizard2.css";
import {
  updateAddress,
  updateCity,
  updateZip,
  updateState,
  cancel
} from "./../../Dux/reducer";

class Wizard2 extends Component {
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
                <span className="Header__right_span open-sans-bold">
                <Link className="link" to="/" onClick={e => this.logout()}>
                Logout{" "}
              </Link>{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="Wizard__step_container">
            <div className="Wizard__stepHeader_container">
              <span className="open-sans-bold Wizard__stepHeader_span">
                
                Add new listing
              </span>

              <button className="open-sans-bold Wizard__stepHeader_btn pink_bgc">
                
                <Link
                  className="open-sans-bold Wizard_stepHeader_btn pink_bcg link"
                  to="/Dashboard"
                  onClick={this.props.cancel}
                >
                  Cancel
                </Link>
              </button>
            </div>
            <div className="Wizard__stepHighlight_container">
              <span className="open-sans Wizard__stepHighlight_span">
                Step 2
              </span>
              <div className="StepHighlight__container">
                <img src={complete} alt="completed" />
                <img src={active} alt="active" />
                <img src={inactive} alt="inactive" />
                <img src={inactive} alt="inactive" />
                <img src={inactive} alt="inactive" />
              </div>
            </div>
            <div className="Step__container">
              <div className="Step2__name_container">
                <span className="open-sans-bold Step2__input_header Step2__name_header">
                  Address
                </span>
              </div>
              <input className="Step__input dark_green_border open-sans"
              value={this.props.address}
              onChange={e => this.props.updateAddress(e.target.value)} />

              <div className="Step2__middle_container">
                <div className="Step2__city_container">
                  <span className="open-sans-bold Step2__input_header">
                    City
                  </span>
                  <input className="open-sans dark_green_border Step__input"
                  value={this.props.city}
                  onChange={e => this.props.updateCity(e.target.value)} />
                </div>
                <div className="Step2__state_container">
                  <span className="open-sans-bold Step2__input_header">
                    State
                  </span>
                  <input className="open-sans dark_green_border Step__input"
                  value={this.props.State}
                  onChange={e => this.props.updateState(e.target.value)} />
                </div>
              </div>
              <div className="Step2__zip_container">
                <span className="open-sans-bold Step2__input_header-zip">
                  Zip
                </span>
              </div>
              <div className="Step2__zipInput_container">
                <input className="open-sans dark_green_border Step__input Step2__zip_input"
                value={this.props.zip}
                onChange={e => this.props.updateZip(e.target.value)} />
              </div>
              <div className="Step__btn_container">
                <Link
                  className="Step__btn_next darkest_green_bgc"
                  to="/Wizard1"
                >
                  Previous Step
                </Link>
                <Link
                  className="Step__btn_next darkest_green_bgc"
                  to="/Wizard3"
                >
                  Next Step
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { address, city, State, zip, propertyName } = state;
  return {
    address,
    city,
    State,
    zip, 
    propertyName
  };
}

export default connect(mapStateToProps, {
  updateAddress,
  updateCity,
  updateZip,
  updateState,
  cancel
})(Wizard2);
