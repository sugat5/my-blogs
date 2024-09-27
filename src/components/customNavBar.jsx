import { Container, Navbar, Nav } from "react-bootstrap";

function CustomNavBar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container className="d-flex justify-content-start">
        <Navbar.Brand href="#home" className="text-black fw-bolder">My Blogs</Navbar.Brand>
        <Nav>
          <Nav.Link href="#home" >Home</Nav.Link>
          <Nav.Link href="#features">Contact Us</Nav.Link>
          <Nav.Link href="#pricing">About Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavBar;
