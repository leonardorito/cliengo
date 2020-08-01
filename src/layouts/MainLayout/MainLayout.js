import React from "react";
import "./MainLayout.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="MainLayout">
      <div className="container">{children}</div>
    </div>
  );
};

export default MainLayout;
