import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./components/Landing";
import { Contact } from "./components/Contact";
import { Project } from "./components/AllProject";
import { Skills } from "./components/Skills";
import { Project1 } from "./components/Project1";
import { Project2 } from "./components/Project2";
import { Project3 } from "./components/Project3";
import { Project4 } from "./components/Project4"; 

function App() {
  return (
    <div>

      <BrowserRouter >
        <Routes>
          <Route path="/" element={ <Landing /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/project" element={ <Project /> } />
          <Route path="/skills" element={ <Skills /> } />
          <Route path="/project-1" element={ <Project1 /> } />
          <Route path="/project-2" element={ <Project2 /> } />
          <Route path="/project-3" element={ <Project3 /> } />
          <Route path="/project-4" element={ <Project4 /> } />
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
