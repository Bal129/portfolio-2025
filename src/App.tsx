import { useRoutes } from "react-router-dom";
import CusFooter from "./components/CusFooter";
import Home from "./pages/home/Home";
// import Contacts from "./pages/Contacts";
import AssistMenu from "./components/AssistMenu";
import { useEffect } from "react";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    // { path: "/contacts", element: <Contacts /> }
  ]);

  useEffect(() => {
    document.documentElement.style.setProperty('--base-url', import.meta.env.BASE_URL);
  }, []);

  return (
    <div className="c-body d-flex flex-column min-vh-100" id="home">
      <div className="force-preserve" style={{ display: 'none' }}></div>
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