import "./css/navbar.css";

export default function Navbar() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
      <nav>
        <ul>
          <img src={require("../media/logo.png")} alt="" id="logoNav" />
          {/* <li className="logo">baseM.</li> */}
          <li className="items">
            <a href="/">Home</a>
          </li>
          <li className="items">
            <a href="/rolex">Watches</a>
          </li>
          <li className="items">
            <a href="#">About</a>
          </li>
          <li className="items" id="aboutID">
            <a href="/login">Dashboard</a>
          </li>
          <li className="btn">
            <a href="#">
              <i className="fas fa-bars"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
