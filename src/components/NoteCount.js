import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    numberOfNotes: state.length,
  };
};
class NoteCount extends Component {
  render() {
    return (
      <div>
        <p className="note_message">
          Number of Notes: {this.props.numberOfNotes}
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NoteCount);
