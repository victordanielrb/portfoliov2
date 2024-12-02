import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home.js';
import Projetos from "./pages/projetos"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
   
      </Routes>
    </BrowserRouter>
  );
};

export default App;