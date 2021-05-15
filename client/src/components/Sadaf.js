import React, { Component } from "react";
import { GetQoD, GetDeviMayor } from "../services/Quotes";
import Sadaff from "./Sadaff";

class Sadaf extends Component {
  state = {
    Text: "",
    Loading: false,
    Quote: null
  };
  setText = Text => {
    this.setState({ Text });
    return false;
  };
  componentDidMount() {
    this.setState({ Loading: true });
    GetQoD().then(Quote => this.setState({ Quote, Loading: false }));
    GetDeviMayor().then(({ data }) => this.setState({ Mayor: data }));
  }
  render() {
    return (
      <div className="Sadaf">
        <Sadaff Text={this.state.Text} setText={this.setText} />
        <Sadaff Text={this.state.Text} setText={this.setText} />
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        {this.state.Loading && !this.state.Quote && (
          <img src="https://i.imgur.com/8R6hplx.gif" alt="Loading..." />
        )}
        {!this.state.Loading && this.state.Quote && <p>Quotations Loaded...</p>}
      </div>
    );
  }
}
export default Sadaf;
