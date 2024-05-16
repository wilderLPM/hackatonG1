import { Outlet } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
