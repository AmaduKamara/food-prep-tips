import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-cyan-500 py-4 shadow-xl">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl text-white">Food Prep Tips</h1>
          <ul className="flex text-white">
            <li className="mx-10">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create New Food</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
