import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoilerPlate from "./pages/BoilerPlate/BoilerPlate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoilerPlate />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
