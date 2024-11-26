import Navbar from "./Users/Navbar";
import Footer from "./pages/Footer";
import AdminNavbar from "./pages/Admin_navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* <Navbar /> */}
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
