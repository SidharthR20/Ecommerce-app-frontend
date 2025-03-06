// import { Navbar, Nav, Container } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
// import { FaShoppingCart, FaUser } from "react-icons/fa";
// import logo from "../assets/logo.png";

// const Header = () => {
//   return (
//     <header>
//       <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
//         <Container>
//           {/* <LinkContainer to="/"> */}
//           <Navbar.Brand href="/">
//             <img src={logo} alt="Logo" />
//             ProShop
//           </Navbar.Brand>
//           {/* </LinkContainer> */}
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               {/* <LinkContainer to="/cart"> */}
//               <Nav.Link href="/cart">
//                 <FaShoppingCart /> Cart
//               </Nav.Link>
//               {/* </LinkContainer> */}
//               {/* <LinkContainer to="/login"> */}
//               <Nav.Link href="/login">
//                 <FaUser /> Sign In
//               </Nav.Link>
//               {/* </LinkContainer> */}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;

import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // ✅ Import Link from react-router-dom
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          {/* ✅ Use `as={Link}` instead of `href` for client-side navigation */}
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" />
            Pretty Simple Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/cart">
                <FaShoppingCart /> Cart
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                <FaUser /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
