import "./App.css";
import "../src/josh/stylesheet.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Landing from "./pages/landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
          <Router>
        <Routes>
        <Route path="/" element={<Landing />} />
 
      </Routes>
      </Router>
    </>
  );
}

export default App;
