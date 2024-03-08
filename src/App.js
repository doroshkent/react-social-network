import React, { useEffect } from "react";
import Template from "Components/Template/Template";
import AppWrapper from "style/Template/AppWrapper";
import Router from "./Components/Router/Router";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./Components/common/Preloader";

function App({ initialized, initializeApp }) {
  useEffect(() => {
    initializeApp();
  }, [initialized]);

  if (!initialized) {
    return <Preloader />;
  }

  return (
    <AppWrapper>
      <Template>
        <Router />
      </Template>
    </AppWrapper>
  );
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
