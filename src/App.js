import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
