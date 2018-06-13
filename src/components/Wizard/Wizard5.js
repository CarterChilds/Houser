import React, { Component } from "react";
import header_logo from "./../images/header_logo.png";
import active from "./../images/step_active.png";
import inactive from "./../images/step_inactive.png";
import complete from "./../images/step_completed.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateDesiredRent, cancel } from "./../../Dux/reducer";
import axios from 'axios'

class Wizard5 extends Component {
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


  addProperty(){
    let {
      propertyName,
      propertyDescription,
      address,
      city,
      State,
      zip,
      imageUrl,
      loanAmount,
      monthlyMortgage,
      desiredRent
    } = this.props;
    let body = {
      propertyName,
      propertyDescription,
      address,
      city,
      State,
      zip,
      imageUrl,
      loanAmount,
      monthlyMortgage,
      desiredRent
    };
    axios.post('/api/addProperty', body).then((res) => {
      
    } )
  }

  render() {
    console.log(this.props)
    return (
      <div id="root">
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
                  to="/Dashboard" onClick={this.props.cancel}
                >
                  Cancel
                </Link>
              </button>
            </div>
            <div className="Wizard__stepHighlight_container">
              <span className="open-sans Wizard__stepHighlight_span">
                Step 5
              </span>
              <div className="StepHighlight__container">
                <img src={complete} alt="complete" />
                <img src={complete} alt="complete" />
                <img src={complete} alt="complete" />
                <img src={complete} alt="complete" />
                <img src={active} alt="active" />
              </div>
            </div>
            <div className="Step__container">
              <span className="open-sans-bold Recommended-rent">
                Recommended Rent: ${this.props.monthlyMortgage*1.25}
              </span>
              <div className="Step5__name_container">
                <span className="open-sans-bold Step__input_header Step1__name_header">
                  Desired Rent
                </span>
              </div>
              <input className="Step__input dark_green_border open-sans"
              value={this.props.desiredRent}
              onChange={e => this.props.updateDesiredRent(e.target.value)} />
              <div className="Step__btn_container">
                <Link
                  to="/Wizard4"
                  className="Step__btn_next darkest_green_bgc"
                >
                  Previous Step
                </Link>
                <Link
                  to="/Dashboard"
                  className="Step__btn_next lightest_green_bgc"
                  onClick={e => this.addProperty()}
                >
                  Complete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
let { propertyName,
  propertyDescription,
  address,
  city,
  State,
  zip,
  imageUrl,
  loanAmount,
  monthlyMortgage,
  desiredRent} = state
  return{
    propertyName,
    propertyDescription,
    address,
    city,
    State,
    zip,
    imageUrl,
    loanAmount,
    monthlyMortgage,
    desiredRent
  }
}

export default connect(mapStateToProps, {updateDesiredRent, cancel})(Wizard5)