import axios from "axios";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

axios.defaults.baseURL = "https://blessed-server.vercel.app";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index="/" element={<Index />} />
          <Route path="/contact-us" element= {<Contact /> } />
         </Routes>
      </Router>
    </>
  );
}

export default App;
