import React, { Component } from "react";
class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
  }
  handleChange = (event) => {
    debugger;
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(` ${this.state.firstName} ${this.state.lastName}`);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          {/* <label>Last Name</label>
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.handleChange}
          /> */}
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
