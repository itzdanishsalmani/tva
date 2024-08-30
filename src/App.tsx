import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./components/Landing";
import { Contact } from "./components/Contact";
import { Project } from "./components/Project";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div>

      <BrowserRouter >
        <Routes>
          <Route path="/" element={ <Landing /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/project" element={ <Project /> } />
          <Route path="/skills" element={ <Skills /> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
