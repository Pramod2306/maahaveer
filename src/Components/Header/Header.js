import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import useTopFixer from "../../CustomHooks/Navbar";
const Header = () => {
	const top = useTopFixer();
	return (
		<div>
			<Navbar className={`${top ? "bg-navbar" : "bg-transparent"}`} fixed='top'>
				<Container className='text-white'>
					<Navbar.Brand href='#home'>
						<img style={{ height: "30px" }} src='/image/logo.png' alt='logo' />
					</Navbar.Brand>
					<Nav className='ml-auto'>
						<Nav.Link className='text-white' href='#home'>
							Home
						</Nav.Link>
						<Nav.Link className='text-white' href='#about'>
							About
						</Nav.Link>
						<Nav.Link className='text-white' href='#service'>
							Services
						</Nav.Link>
						<Nav.Link className='text-white' href='#contact'>
							Contact
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
