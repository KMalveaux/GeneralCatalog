// import { children } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import FlyoutMenu from "./FlyoutMenu"
import wizardLogo from './images/wizardLogo.png';

export default function Navbar() {
    return (
      <nav className="nav">
        {/* Link to essentially replaces the anchor tags and acts as a router instead of the href */}
        <Link to="/" class="site-title">
          Wizard Shop
          <img src={wizardLogo} alt="Wizard Logo" className="wizard-logo" />
        </Link>
        <ul className="nav-center">
          <CustomLink to="/Listings">Listings</CustomLink>
          <CustomLink to="/Categories">Categories</CustomLink>
          {/* <CustomLink to="/Deals">Deals</CustomLink> */}
          <CustomLink to="/ListingCreation">List an Item</CustomLink>
          <CustomLink to="/ProductPage">Product Page Testing</CustomLink>
        </ul>
        <ul className="nav-right">
          <li className="navAccount">
            <div className="relative">
              <FlyoutMenu />
            </div>
          </li>
          <CustomLink to="/Cart">Cart</CustomLink>
        </ul>
      </nav>
    );
  }

function CustomLink({ to, children, ...props} ) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
             <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}