import React, { useEffect, useRef } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import useTopFixer from "../../CustomHooks/Navbar";
const Header = () => {
	const top = useTopFixer();

	const link = useRef(null);
	const select = (id) => {
		console.log(id);
		for (let i = 0; i < link.current.children.length; i++) {
			link.current.children[i].classList.add("text-white");
		}
		console.log(link.current.children[id]);
		link.current.children[id].classList.remove("text-white");
		link.current.children[id].classList.add("text-orange");
	};
	useEffect(() => {
		select(0);
	}, []);

	return (
		<div>
			<Navbar className={`${top ? "bg-navbar" : "bg-transparent"}`} fixed='top'>
				<Container className='text-white'>
					<Navbar.Brand href='#home'>
						<img style={{ height: "30px" }} src='/image/logo.png' alt='logo' />
					</Navbar.Brand>
					<div ref={link} className='ml-auto me-4 navbar-nav'>
						<a
							className='nav-link'
							data-to-scrollspy-id='home'
							onClick={() => {
								select(0);
							}}
							href='#home'>
							Home
						</a>
						<a
							className='nav-link'
							data-to-scrollspy-id='about'
							onClick={() => {
								select(1);
							}}
							href='#about'>
							About
						</a>
						<a
							className='nav-link'
							data-to-scrollspy-id='service'
							onClick={() => {
								select(2);
							}}
							href='#service'>
							Services
						</a>
						<a
							className='nav-link'
							data-to-scrollspy-id='contact'
							onClick={() => {
								select(3);
							}}
							href='#contact'>
							Contact
						</a>
					</div>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
