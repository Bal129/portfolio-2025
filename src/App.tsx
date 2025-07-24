import { useRoutes } from "react-router-dom";
import CusFooter from "./components/CusFooter";
import CusNavbar from "./components/CusNavbar";
import Home from "./pages/home/Home";
import Contacts from "./pages/Contacts";
import AssistMenu from "./components/assistMenu/AssistMenu";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/contacts", element: <Contacts /> }
  ]);

  return (
    <div className="d-flex flex-column min-vh-100" id="home">
      {/* <CusNavbar /> */}
      <AssistMenu />
        <main className="flex-grow-1">
          {routes}
        </main>
      <CusFooter />
    </div>
  )
}

export default App;