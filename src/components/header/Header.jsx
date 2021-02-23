import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => (
  <header className="App-movies-header">
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">The Movies App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/addForm">Add Movie</Nav.Link>
        <Nav.Link href="/top-movies">Top 5 Movies</Nav.Link>
      </Nav>
      {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
      </Form> */}
      </Navbar.Collapse>
    </Navbar>

  </header>
)

export default Header;