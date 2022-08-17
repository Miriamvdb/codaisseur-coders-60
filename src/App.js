import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Homepage, PostDetailspage } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/post/:id" element={<PostDetailspage />} />
      </Routes>
    </div>
  );
}

export default App;
