'use client'
import { useRouter } from 'next/navigation';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
  const router = useRouter();

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top" bg="light">
      <Container>
        <Navbar.Brand onClick={() => router.push('/')} className="pointer">Rosewood Hotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link onClick={() => router.push('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => router.push('/rooms')}>Rooms</Nav.Link>
            <Nav.Link onClick={() => router.push('/about')}>About</Nav.Link>
            <Nav.Link onClick={() => router.push('/events')}>Events</Nav.Link>
            <Nav.Link onClick={() => router.push('/reservations')}>Reservation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
