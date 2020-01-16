import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };
  }
  changeCity = e => {
    this.setState({ city: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.getCity(this.state.city);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="city"
          placeholder="City"
          onChange={this.changeCity}
        />
        <input type="submit" name="submit" value="Find Weather" id="find" />
      </form>
    );
  }
}
