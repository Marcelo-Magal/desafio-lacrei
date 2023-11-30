import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Professional from "./Pages/Professional/Professional"
import UserPerson from "./Pages/UserPerson/UserPerson"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Professional" element={<Professional />} />
      <Route path="/UserPerson" element={<UserPerson />} />
      </Routes>
    </Router>
  );
}

export default App;
