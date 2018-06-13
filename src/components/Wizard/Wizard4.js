import React, { Component } from "react";
import header_logo from "./../images/header_logo.png";
import active from "./../images/step_active.png";
import inactive from "./../images/step_inactive.png";
import complete from "./../images/step_completed.png";
import axios from 'axios'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateLoanAmount, updateMonthlyMortgage, cancel } from "./../../Dux/reducer";

class Wizard4 extends Component {
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
                  Cancel{" "}
                </Link>
              </button>
            </div>
            <div className="Wizard__stepHighlight_container">
              <span className="open-sans Wizard__stepHighlight_span">
                Step 4
              </span>
              <div className="StepHighlight__container">
                <img src={complete} alt="completed" />
                <img src={complete} alt="completed" />
                <img src={complete} alt="completed" />
                <img src={active} alt="active" />
                <img src={inactive} alt="inactive" />
              </div>
            </div>
            <div className="Step__container">
              <div className="Step1__name_container">
                <span className="open-sans-bold Step__input_header Step1__name_header">
                  Loan Amount
                </span>
              </div>
              <input
                className="Step__input dark_green_border open-sans"
                value={this.props.loanAmount}
                onChange={e => this.props.updateLoanAmount(e.target.value)}
              />
              <div className="Step1__name_container">
                <span className="open-sans-bold Step__input_header Step1__name_header">
                  Monthly Mortgage
                </span>
              </div>
              <input
                className="Step__input dark_green_border open-sans"
                value={this.props.monthlyMortgage}
                onChange={e => this.props.updateMonthlyMortgage(e.target.value)}
              />
              <div className="Step__btn_container">
                <Link className="Step__btn_next darkest_green_bgc" to="Wizard3">
                  Previous Step
                </Link>
                <Link
                  className="Step__btn_next darkest_green_bgc"
                  to="/Wizard5"
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
  const { loanAmount, monthlyMortgage } = state;
  return {
    loanAmount,
    monthlyMortgage
  };
}

export default connect(mapStateToProps, { updateMonthlyMortgage, updateLoanAmount, cancel })(
  Wizard4
);
