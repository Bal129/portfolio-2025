import { useRoutes } from "react-router-dom";
import CusFooter from "./components/CusFooter";
import Home from "./pages/home/Home";
import Contacts from "./pages/Contacts";
import AssistMenu from "./components/AssistMenu";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/contacts", element: <Contacts /> }
  ]);

  return (
    <div className="c-body d-flex flex-column min-vh-100" id="home">
      {/* <CusNavbar /> */}
      <AssistMenu />
      {/* <ThemeToggle /> */}
        <main className="flex-grow-1">
          {routes}
        </main>
      <CusFooter />
    </div>
  )
}

export default App;