import React from "react";
import { useEffect, useState } from "react";

const NoSsrWrapper = ({ children }) => {
  const [mountedState, setMountedState] = useState(false);
  useEffect(() => {
    setMountedState(true);
  }, []);
  return <>{mountedState ? children : null}</>;
};

export default NoSsrWrapper;
