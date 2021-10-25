import React, { Component } from "react";
// connect to redux store
import { connect } from "react-redux";

export class NewNote extends Component {
  // form submission function
  handleSubmit = (e) => {
    e.preventDefault();
    // declare vars
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message,
      editing: false,
    };
    // dispatcher
    this.props.dispatch({
      type: "ADD_NOTE",
      data,
    });
    // clear inputs after submission
    this.getTitle.value = "";
    this.getMessage.value = "";
    

    console.log("title  :", title, "msg : ", message);
  };
  render() {
    return (
      <div className="container">
        <h1 className="heading">Create New Note</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            required
            placeholder="Please Enter Note Tittle"
            ref={(input) => (this.getTitle = input)}
          />
          <br />

          <textarea
            required
            rows="5"
            cols="28"
            placeholder="Please Enter Note Body"
            ref={(input) => (this.getMessage = input)}
          />
          <br />

          <button>Add Note</button>
        </form>
      </div>
    );
  }
}
// make sure to add the connect function

export default connect()(NewNote);
