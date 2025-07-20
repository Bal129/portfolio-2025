import { useRoutes } from "react-router-dom";
import CusFooter from "./components/CusFooter";
import CusNavbar from "./components/CusNavbar";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";

function App() {
  const navbarItems = [
    { name: "Home", link: "/" },
    { name: "Contacts", link: "/contacts" },
  ];

  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/contacts", element: <Contacts /> }
  ]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <CusNavbar items={navbarItems} />
      <div className="my-5"></div> {/* Necessary for navbar fixed-top */}

      <main className="flex-grow-1">
        {routes}
      </main>
      
      <CusFooter />
    </div>
  )
}

export default App;