import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  return (
    // <section className="Nav">
    //   <nav className="navbar">
    <div className="navbar">
      <p>
        <Link to={"/"}>Homepage</Link>
        <br />
        <Link to={"/About"}>About</Link>
      </p>
    </div>
    //   </nav>
    // </section>
  );
}

export default Nav;
