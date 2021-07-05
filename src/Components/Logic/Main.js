import React from "react";
import PropTypes from "prop-types";

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

  hanldeMulSubmit = (event) => {
    this.setState({
      submitValue: this.state.input1 * this.state.input2,
    });
  };

  hanldeDivSubmit = (event) => {
    this.setState({
      submitValue: this.state.input1 / this.state.input2,
    });
  };

  hanldePowSubmit = (event) => {
    this.setState({
      submitValue: Math.pow(this.state.input1, this.state.input2),
    });
  };

  handleExponentSubmit = (event) => {
    this.setState({
      submitValue: Math.exp,
    });
  };

  returnMethodButton = () => {
    if (this.state.input3 === "+") {
      return this.handleAddSubmit();
    } else if (this.state.input3 === "-") {
      return this.handleSubSubmit();
    } else if (this.state.input3 === "*") {
      return this.hanldeMulSubmit();
    } else if (this.state.input3 === "/") {
      return this.hanldeDivSubmit();
    } else if (this.state.input3 === "^") {
      return this.hanldePowSubmit();
    }
  };

  resetButton = (event) => {
    this.setState({
      input1: "",
      input2: "",
      input3: "",
      submitValue: "",
    });
  };

  render() {
    return (
      <div class="flex h-screen justify-center text-center items-center bg-gray-200">
        <div class="rounded-3xl shadow-2xl grid pt-6 pd-6 pl-10 pr-10 bg-white">
          <h2 class="mt-6 text-3xl text-center font-bold text-grey-darkest-900">
            ikommpute
          </h2>
          <div>
            <input
              class="text-center justify-center"
              value={this.state.input1}
              onChange={this.handleInput1Change}
              placeholder="Enter the first operand"
            />
          </div>
          <div>
            <input
              class="text-center justify-center"
              value={this.state.input3}
              onChange={this.handleInput3Change}
              placeholder="Enter the operator"
            />
          </div>
          <div>
            <input
              class="text-center justify-center"
              value={this.state.input2}
              onChange={this.handleInput2Change}
              placeholder="Enter the second operand"
            />
          </div>
          <div class="inline-flex justify-center">
            <button
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
              onClick={this.returnMethodButton}
            >
              RESULT
            </button>
            <button
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
              onClick={this.resetButton}
            >
              RESET
            </button>
          </div>
          <div>
            <input
              class="text-center justify-center"
              value={this.state.submitValue}
              onChange={this.returnMethodButton}
            />
          </div>
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
