//React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Add_document from "./pages/Add_document";
import Horizontal from "./components/navbar/Horizontal";
import News_info from "./pages/News_info";

const App = () => {
  return (
    <BrowserRouter>
      <Horizontal/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="add_document" element={<Add_document />} />
        <Route path="/:id" element={<News_info />} />        
        <Route
          path="*"
          element={
            <main className="p-[1rem]">
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
