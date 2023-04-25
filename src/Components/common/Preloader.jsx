import React from "react";
import loader from "assets/img/Loader.svg";
import Loader from "style/common/Loader";

function Preloader() {
  return <Loader src={loader} alt={" "} />;
}

export default Preloader;
