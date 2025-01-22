import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";

import { Home } from "./pages/Home";
import { Community } from "./pages/Community";
import { Oss } from "./pages/Oss";
import { Kontakt } from "./pages/Kontakt";
import { Sponsor } from "./pages/Sponsor";
import { Lag } from "./pages/Lag";
import { Nopage } from "./pages/Nopage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/oss" element={<Oss />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/sponsorer" element={<Sponsor />} />
        <Route path="/lag" element={<Lag />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </>
  );
}

export default App;
