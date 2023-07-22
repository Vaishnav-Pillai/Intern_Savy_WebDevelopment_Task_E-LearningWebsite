import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [logged,setLogged] = useState(false);

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<><Home logged={logged}/> <Login logged={logged} setLogged={setLogged} /></>} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/login" element={<Login logged={logged} setLogged={setLogged} />} />
        </Routes>
    </Router>
  )
}

export default App;
