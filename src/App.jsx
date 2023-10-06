import "./App.css";
import { Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Menu from "./pages/Menu";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';


function App() {

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Menu/>}></Route>
        <Route path="/game" element={<Game />}></Route>
      </Routes>
    </>
  );
}

export default App;
