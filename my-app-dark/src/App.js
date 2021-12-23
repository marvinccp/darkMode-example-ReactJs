import React from 'react'
import Navbar from "./components/Navbar";
import Main from './components/Main';
import "./index.css"

function App() {
  const [darkMode, setDarkMode] = React.useState({
    on: false,
    img: "../imagenes/logo-light.png",
  });

  const toggleDark = () => {
    setDarkMode((prevState) => ({
      ...darkMode,
      on: !prevState.on,
      img: prevState.on
        ? "../imagenes/logo-light.png"
        : "../imagenes/logo-dark.png",
    }));
  };
  return (
    <>
      <Navbar
        darkMode={darkMode.on}
        toggleDark={toggleDark}
        darkModeImg={darkMode.img}
      />
      <Main darkMode={darkMode.on} darkModeImg={darkMode.img} />
    </>
  );
}

export default App;
