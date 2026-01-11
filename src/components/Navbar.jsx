const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-nav">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              मुख्यपृष्ठ
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
            >
              ग्रामपंचायत
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  माहिती
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
            >
              गाव
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              फोटो गॅलरी
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              संपर्क
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
