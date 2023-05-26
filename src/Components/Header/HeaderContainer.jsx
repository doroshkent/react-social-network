import React from "react";
import Header from "./Header";
import { getUserAuthData, logout } from "redux/authReducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getUserAuthData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  id: state.auth.id,
});

export default connect(mapStateToProps, { getUserAuthData, logout })(
  HeaderContainer
);
