import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Cart from "../CartWidget"
import iconoCarrito from "/src/assets/iconoCarrito.svg"
import Logo from "/src/helpers/Logo"
import logo from "/src/assets/logo.jpg"


function NavBar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            <Logo imgLogo={logo} />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>          <div className="collapse navbar-collapse nav-bar">
            <ul className="ul">
              <li className="nav-item">
                <a className="nav-link" href="">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Contactate</a>
              </li>
              <li className="nav-item">
                <Cart imgCart={iconoCarrito} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
