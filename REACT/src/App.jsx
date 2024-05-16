import { Outlet } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <NavBar />
        <Outlet />
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
