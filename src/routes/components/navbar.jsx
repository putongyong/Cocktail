import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
      <> 
            <div class="placeholder">
                <div class="parallax-window">
                    <div class="tm-header">
                        <div class="row tm-header-inner">
                            <div class="col-md-6 col-12">
                                <img src="img/simple-house-logo.png" alt="Logo" class="tm-site-logo" /> 
                                <div class="tm-site-text-box">
                                    <h1 class="tm-site-title">Cocktail Room</h1>
                                    <h6 class="tm-site-description">a bar where we meet</h6>	
                                </div>
                            </div>
                            
                            <nav className="col-md-6 col-12 tm-nav">
                                <ul className="tm-nav-ul">
                                    <li className="tm-nav-li">
                                        <NavLink to="/" exact className="tm-nav-link" activeClassName="active">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="tm-nav-li">
                                        <NavLink to="/products" className="tm-nav-link" activeClassName="active">
                                            Products
                                        </NavLink>
                                    </li>
                                    <li className="tm-nav-li">
                                        <NavLink to="/workshop" className="tm-nav-link" activeClassName="active">
                                            Workshop
                                        </NavLink>
                                    </li>
                                    <li className="tm-nav-li">
                                        <NavLink to="/about" className="tm-nav-link" activeClassName="active">
                                            About
                                        </NavLink>
                                    </li>
                                    <li className="tm-nav-li">
                                        <NavLink to="/contact" className="tm-nav-link" activeClassName="active">
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
      </>
    )
}