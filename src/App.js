import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {useSnackbar} from 'notistack';

function App() {
  /*----------------------------------------------------------Dark/Light Mode-----------------------------------------*/
  let modeToggle = () => {
    if (myMode === "light") {
      setMyMode("dark");
      document.body.style.backgroundColor = "#212529";
      alert("Dark Mode Enabled", "info");
    } else {
      setMyMode("light");
      document.body.style.backgroundColor = "white";
      alert("Light Mode Enabled", "info");
    }
  };

  const [myMode, setMyMode] = useState("light");

  /*--------------------------------------------------------Alert----------------------------------------------------*/
  const {enqueueSnackbar}= useSnackbar();
  function alert(message,type,data) {
            if(data!=='') enqueueSnackbar(message, {variant:type,preventDuplicate:true,autoHideDuration: 1000})
            else enqueueSnackbar('TextBox is Empty', {variant:'warning',preventDuplicate:true,autoHideDuration: 1000})
}
  return (
    <>
      <BrowserRouter>
          <Navbar
            title={"TextUtils"}
            about={"About"}
            mode={myMode}
            handleMode={modeToggle}
          />
          <div className="container">
            <Routes>
              <Route exact path='/' element={<TextForm heading={'Enter the text for formatting'} mode={myMode} handleAlert={alert}/>} />
              <Route path='/about' element={<About mode={myMode} />}/>
            </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}
export default App;
