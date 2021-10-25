import React, { Component } from "react";

export class NewNote extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">Create New Note</h1>
        <form className="form">
          <input type="text" required placeholder="Please Enter Note Tittle" />
          <br />

          <textarea
            required
            rows="5"
            cols="28"
            placeholder="Please Enter Note Body"
          />
          <br />

          <button>Add Note</button>
        </form>
      </div>
    );
  }
}

export default NewNote;
