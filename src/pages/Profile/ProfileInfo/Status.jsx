import React from "react";
import UserStatus from "style/Users/UserStatus";
import Textarea from "style/common/Textarea";

class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return this.state.editMode ? (
      <Textarea
        onChange={this.onStatusChange}
        autoFocus={true}
        value={this.state.status}
        onBlur={this.deactivateEditMode}
      />
    ) : (
      <UserStatus onDoubleClick={this.activateEditMode}>
        {this.props.status || "Status"}
      </UserStatus>
    );
  }
}

export default Status;
