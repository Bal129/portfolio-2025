import { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarItems {
  name: string;
  link: string;
}

interface NavbarProps {
  items: NavbarItems[];
}

function CusNavbar({items}: NavbarProps) {

  const [activePage, setActivePage] = useState(0);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Portfolio 2025</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              items.map((item, index) => (
                <li
                  className="nav-item"
                  key={item.name}
                  onClick={() => {
                    setActivePage(index);
                  }}
                >
                  <Link 
                    to={item.link}
                    className={
                      activePage === index
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default CusNavbar;