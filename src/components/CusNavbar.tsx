import { useEffect, useState } from "react";

type NavbarItem = {
  sections: NavbarSection[];
}

type NavbarSection = {
  name: string;
  href: string;
}

// function CusNavbar({items}: NavbarProps) {
function CusNavbar() {
  const [activePage, setActivePage] = useState(0);
  const [navData, setNavData] = useState<NavbarItem>();

  useEffect(() => {
    fetch("/data/contents.json")
      .then(response => response.json())
      .then(fetchedData => setNavData(fetchedData));
  }, []);

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
              navData?.sections.map((item, index) => (
                <li
                  className="nav-item"
                  key={item.href}
                  onClick={() => {
                    setActivePage(index);
                  }}
                >
                  <a
                    href={"#"+item.href}
                    className={
                      activePage === index
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    {item.name}
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