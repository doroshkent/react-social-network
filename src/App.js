import React from "react";
import Template from "Components/Template/Template";
import AppWrapper from "style/Template/AppWrapper";
import Router from "./Components/Router/Router";

function App() {
  return (
    <AppWrapper>
      <Template>
        <Router />
      </Template>
    </AppWrapper>
  );
}

export default App;
