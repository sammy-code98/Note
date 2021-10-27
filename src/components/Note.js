import React, { Component } from "react";

class Note extends Component {
  render() {
    return (
      <div className="note">
        <h2 className="note_title">{this.props.note.title}</h2>
        <p className="note_message">{this.props.note.message}</p>
        <div className="control-buttons">
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
        </div>
      </div>
    );
  }
}

export default Note;
