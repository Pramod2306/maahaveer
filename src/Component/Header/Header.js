import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import useTopFixer from "../../CustomHooks/Navbar";

const Header = () => {
	const top = useTopFixer();
	return (
		<div>
			<Navbar className={`${top ? "bg-navbar" : "bg-transparent"}`} fixed='top'>
				<Container className='text-white'>
					<Navbar.Brand href='#home'></Navbar.Brand>
					<Nav className='m-auto'>
						<Nav.Link className='text-white mx-4' href='#home'>
							Home
						</Nav.Link>
						<Nav.Link className='text-white mx-4' href='#features'>
							About
						</Nav.Link>
						<Nav.Link>
							<img
								style={{ height: "30px" }}
								src='/image/logo.png'
								alt='logo'
							/>
						</Nav.Link>
						<Nav.Link className='text-white mx-4' href='#pricing'>
							Services
						</Nav.Link>
						<Nav.Link className='text-white mx-4' href='#pricing'>
							Contact
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
