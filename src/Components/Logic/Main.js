import React from "react";
import PropTypes from "prop-types";
import "./Main.css";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
// import { makeStyles } from "@material-ui/core/styles";

class Calc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: "",
      input2: "",
      input3: "",
      submitValue: "",
    };

    this.handleInput1Change = this.handleInput1Change.bind(this);
    this.handleInput2Change = this.handleInput2Change.bind(this);
    this.handleInput3Change = this.handleInput3Change.bind(this);
    this.returnMethodButton = this.returnMethodButton.bind(this);
  }

  handleInput1Change = (event) => {
    this.setState({
      input1: event.target.value,
    });
  };

  handleInput2Change = (event) => {
    this.setState({
      input2: event.target.value,
    });
  };

  handleInput3Change = (event) => {
    this.setState({
      input3: event.target.value,
    });
  };

  handleAddSubmit = (event) => {
    this.setState({
      submitValue: Number(this.state.input1) + Number(this.state.input2),
    });
  };

  handleSubSubmit = (event) => {
    this.setState({
      submitValue: Number(this.state.input1) - Number(this.state.input2),
    });
  };

  returnMethodButton = () => {
    if (this.state.input3 === "+") {
      return this.handleAddSubmit();
    } else if (this.state.input3 === "-") {
      return this.handleSubSubmit();
    }
  };

  render() {
    return (
      <div className="calc">
        <h2>ikommpute</h2>
        <div>
          <input
            value={this.state.input1}
            onChange={this.handleInput1Change}
            placeholder="Enter the first operand"
          />
        </div>
        <div>
          <input
            value={this.state.input3}
            onChange={this.handleInput3Change}
            placeholder="Enter the operator"
          />
        </div>
        <div>
          <input
            value={this.state.input2}
            onChange={this.handleInput2Change}
            placeholder="Enter the second operand"
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.returnMethodButton}
          >
            Click to calculate
          </Button>
        </div>
        <div>
          <input
            value={this.state.submitValue}
            onChange={this.returnMethodButton}
          />
        </div>
      </div>
    );
  }
}

Calc.propTypes = {
  input1: PropTypes.number.isRequired,
  input2: PropTypes.number.isRequired,
};

export default Calc;
