import React from 'react'

const Main = ({ darkMode, darkModeImg }) => {
  return (
    <main className={`main--container ${darkMode && "dark"}`}>
      <img src={darkModeImg} alt="logo--navbar" />
    </main>
  );
};

export default Main
