import React from "react";
import { Spinner } from "reactstrap";

export const LoaderComponent = ({ show }) => {
  return (
    <div style={styles.overlay}>
      <Spinner type="grow" color="info" />
    </div>
  );
};

const styles = {
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "fixed",
    left: 0,
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999,
  },
};
