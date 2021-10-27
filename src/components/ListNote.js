import React, { Component } from "react";
import NoteCount from "./NoteCount";
import { connect } from "react-redux";

class ListNote extends Component {
  render() {
    return (
      <div className="container-note">
        <h1 className="heading">All My Notes</h1>
        {/* get the props from the parent component and map through */}
        {this.props.notes.map((note) => (
          <NoteCount key={note.id} note={note} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    notes: state,
  };
};

export default connect(mapStateToProps)(ListNote);
