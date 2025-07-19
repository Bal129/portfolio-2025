import CusFooter from "./components/CusFooter";
import CusNavbar from "./components/CusNavbar";
import Home from "./pages/Home";

function App() {
  const navbarItems = ["Home", "About", "Projects"]

  return (
    <div className="d-flex flex-column min-vh-100">
      <CusNavbar names={navbarItems} />
      <div className="my-5"></div> {/* Necessary for navbar fixed-top */}

      <main className="flex-grow-1">
        <Home />
      </main>
      
      <CusFooter />
    </div>
  )
}

export default App;