import React from "react";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        { <a className="navbar-brand" href="#">
          Welcome
        </a> }
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Your Portfolio
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Suggestions
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Market Trends
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Risk Management
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Suggestions for Us
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              {/*<a className="nav-link disabled">Disabled</a>*/}
            </li>
          </ul>
          <form className="d-flex">
          <label id="email">E-Mail:</label>
            <input type={"email"} placeholder="E-Mail" ></input>
            <label id="Password">Password:</label>
            <input type={"password"} ></input>
          <button className="btn btn-outline-success" type="submit">
              Login
            </button>
            <button className="btn btn-outline-success" type="submit">
              Signup
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
