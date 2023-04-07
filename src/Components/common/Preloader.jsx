import React from "react";
import loader from "img/Loader.svg";
import Loader from "style/Template/Loader";

function Preloader() {
  return <Loader src={loader} alt={" "} />;
}

export default Preloader;
