import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./components/Landing";
import { MissMinute } from "./components/MissMinute";

function App() {
  return (
    <div>

      <BrowserRouter >
        <Routes>
          <Route path="/" element={ <Landing /> } />
          <Route path="/m" element={ <MissMinute /> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
