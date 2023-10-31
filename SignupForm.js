import React, { Component } from 'react';

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      email: '',
      ph: '',
      age: '',
      gender: '',
      sname: '',
      address: '',
      password: '',
      confirm_password: '',
      dec: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.fname) {
      alert("Name must be filled out");
      return;
    }

    // Add similar validation checks for other fields

    alert("Registration Successful!");
  };

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: val,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="hh">
          <h1 style={{ color: 'rgb(0, 0, 0)' }}>Sign Up</h1>

          <label>
            Name:
            <input
              type="text"
              name="fname"
              placeholder="Enter your first name"
              required
              value={this.state.fname}
              onChange={this.handleChange}
              pattern="[a-zA-Z]{3,}"
              autoFocus
            />
          </label>
          {/* Add similar JSX for other input fields */}
          <br /><br />

          <label>
            I agree to the terms and conditions
            <input
              type="checkbox"
              name="dec"
              id="dec"
              checked={this.state.dec}
              onChange={this.handleChange}
            />
          </label>

          <br /><br />
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default SignupForm;
