import { useState } from "react";

interface NavbarItems {
  names: string[];
}

function CusNavbar({names}: NavbarItems) {

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
              names.map((item, index) => (
                <li
                  className="nav-item"
                  key={item}
                  onClick={() => {
                    setActivePage(index);
                  }}
                >
                  <a
                    className={
                      activePage === index
                        ? "nav-link active"
                        : "nav-link"
                    }
                    href=""
                  >
                    {item}
                  </a>
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