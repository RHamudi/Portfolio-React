import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Background from "./Background";
import Contatos from "./Components/Contatos/Contatos";
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
        <Route path="/contatos" element={<Contatos/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
