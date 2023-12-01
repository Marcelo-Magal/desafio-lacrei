import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Professional from "./Pages/Professional/Professional";
import UserPerson from "./Pages/UserPerson/UserPerson";
import PageContainer from "./Components/PageContainer/PageContainer";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <PageContainer className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Professional" element={<Professional />} />
          <Route path="/UserPerson" element={<UserPerson />} />
        </Routes>
      </PageContainer>
      <Footer />
    </Router>
  );
}

export default App;
