import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Background from "./Background";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Portifolio from "./Components/Portifolio/Portifolio";

function App() {
  return (
    <>
    <Router>
      <Background />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/portifolio" element={<Portifolio/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
