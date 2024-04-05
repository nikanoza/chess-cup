import { Route, Routes } from "react-router-dom";
import { Completed, Experience, Home, Personal } from "./pages";

function App() {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </div>
  );
}

export default App;
