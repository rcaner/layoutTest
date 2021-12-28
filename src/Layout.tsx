import React, { useState } from "react";
import Aside from "./Aside";
import Main from "./Main";

function Layout({ setLocale, children }) {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
    if (checked) {
      document.documentElement.setAttribute("data-collapsed", "collapsed");
    } else {
      document.documentElement.setAttribute("data-collapsed", "");
    }
  };

  const handleLanguageChange = (code) => {
    setLocale(code);
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app ${rtl ? "rtl" : ""} ${toggled ? "toggled" : ""}`}>
      <Aside
        image={image}
        collapsed={collapsed}
        rtl={rtl}
        toggled={toggled}
        handleLanguageChange={handleLanguageChange}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      {children}
    </div>
  );
}

export default Layout;
