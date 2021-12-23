import React from "react";

const Navbar = (
    { darkMode, 
    toggleDark,
    darkModeImg }
    ) => {

        console.log(darkMode);
  return (
    <nav className={`Navbar--container ${darkMode && "dark"}`}>
      <div className="logo-container">
        <img src={darkModeImg} alt="logo--navbar" />
      </div>
      <div className="nav-switcher-container">
        <div className="dark-mode--switch">
          <p className={`dark-mode-light-text ${darkMode && "dark"}`}>Light</p>
          <div
            className={`dark--switch-container ${darkMode && "dark"}`}
            onClick={toggleDark}
          >
            <div className={`dark--switch--circle ${darkMode && "dark"}`}></div>
          </div>
        </div>
        <p className={`dark-mode-dark-text ${darkMode && "dark"}`}>Dark</p>
      </div>
    </nav>
  );
};

export default Navbar;
