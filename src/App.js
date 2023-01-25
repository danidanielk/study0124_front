import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./routes/Join.js";
import Login from "./routes/Login.js";
import Main from "./routes/Main.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
