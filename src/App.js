import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import Join from "./routes/Join.js";
import Login from "./routes/Login.js";
import Main from "./routes/Main.js";
import MainHeader from "./routes/MainHeader.js";
import Post from "./routes/Post.js";
function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
