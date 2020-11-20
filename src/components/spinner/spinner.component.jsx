import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";
// alert("hi");
const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
