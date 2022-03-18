import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042143";
      showAlert("Dark mode has beedn enable", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has beedn enable", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Textutils"
          abouttext="About Textutils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route exact path="/About" element={<About />}></Route>

            <Route
              exact
              path="/"
              element={
                <Textform
                  heading="Enter the Text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
