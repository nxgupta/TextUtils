import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  /*----------------------------------------------------------Dark/Light Mode-----------------------------------------*/
  let modeToggle = () => {
    if (myMode === "light") {
      setMyMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark Mode Enabled", "light");
    } else {
      setMyMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "dark");
    }
  };

  const [myMode, setMyMode] = useState("light");

  /*--------------------------------------------------------Alert----------------------------------------------------*/
  function showAlert(message, type) {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const [alert, setAlert] = useState(null);
  return (
    <>
      <BrowserRouter>
          <Navbar
            title={"TextUtils"}
            about={"About"}
            mode={myMode}
            handleMode={modeToggle}
          />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path='/' element={<TextForm heading={'Enter the text for formatting'} mode={myMode} handleAlert={showAlert}/>} />
              <Route path='/about' element={<About mode={myMode} />}/>
            </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}
export default App;
