import Login from "./components/Login";
import "./App.css";
import MainHeader from "./components/MainHeader";
import { useEffect, useState } from "react";
import Home from "./components/Home";

function App() {
  //for check if user is log in or not on in buttonclick
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const temp = localStorage.getItem("isLoggedIn");
    console.log(temp);

    if (temp === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };
  return (
    <div className="App">
      <MainHeader isLoggedIn={isLoggedIn} onLogout={logoutHandler} />
      {!isLoggedIn && <Login onLogin={loginHandler} onLogout={logoutHandler} />}
      {isLoggedIn && <Home />}
    </div>
  );
}

export default App;
