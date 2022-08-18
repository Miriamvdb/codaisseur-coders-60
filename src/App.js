import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Homepage, LoginPage, PostDetailspage } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/post/:id" element={<PostDetailspage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
