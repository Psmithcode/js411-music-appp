import "./App.css";
import Login from "./Components/Login";
import Header from "./Components/Header";
import { useState } from "react";
import Dashboard from "./Components/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function renderMarkup() {
    if (isLoggedIn === true) {
      return <Dashboard />;
    } else {
      return <Login handleClick={setIsLoggedIn} />;
    }
  }

  return (
    <div className="App" style={divStyle}>
      <Header />
      {renderMarkup()}
    </div>
  );
}

const divStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  // marginBottom: "20px",
};

export default App;
