import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import AdminNavbar from "./pages/Admin_navbar";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* <Navbar /> */}
      <AdminNavbar/>
      <Footer/>
    </div>
  );
}

export default App;
