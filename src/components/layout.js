import React from "react";
import PropTypes from "prop-types";

import Global from "../styles/Global";

const Layout = ({ children }) => {
  return (
    <>
      <Global />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
