import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./components/Layout/AppLayout"
import Home from "./Pages/Home"
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Country from "./Pages/Country";
import ErrorPage from "./Pages/Errorpage";
import CountryDetails from "./components/Layout/CountryDetails"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="country" element={<Country />} />
          <Route path="country/:id" element={<CountryDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
