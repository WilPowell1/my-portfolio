import { React, useState } from "react";
import "./app.css";
import Intro from "./components/Intro/Intro";
import TopBar from "./components/TopBar/TopBar";
import Menu from "./components/Menu/Menu";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return(
      <div className="app">
        <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="sections">
              <Intro />
              <Portfolio />
            </div>
      </div>
  );
};

export default App;
