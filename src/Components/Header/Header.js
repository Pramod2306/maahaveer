import React, { useEffect, useRef } from "react";
import { Navbar, Container } from "react-bootstrap";
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
		link.current.children[id].classList.add("text-lightBlue");
	};

	// const scrollSpy = () => {
	// 	window.addEventListener("scroll", () => {
	// 		if (window.scrollX == 0) {
	// 			link;
	// 		}
	// 	});
	// };

	useEffect(() => {
		select(0);
	}, []);

	return (
		<div>
			<Navbar
				className={`${top ? "bg-navbar" : "bg-transparent"}`}
				expand='lg'
				fixed='top'>
				<Container className='text-white'>
					<Navbar.Brand href='#home'>
						<img style={{ height: "30px" }} src='/image/logo.png' alt='logo' />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav' className='header-nav'>
						<div id='navbar' ref={link} className=' navbar-nav'>
							<a
								className='nav-link mx-3'
								onClick={() => {
									select(0);
								}}
								href='#home'>
								<div>Home</div>
							</a>
							<a
								className='nav-link mx-3'
								onClick={() => {
									select(1);
								}}
								href='#about'>
								<div>About</div>
							</a>
							<a
								className='nav-link mx-3'
								onClick={() => {
									select(2);
								}}
								href='#service'>
								Services
							</a>
							<a
								className='nav-link mx-3'
								onClick={() => {
									select(3);
								}}
								href='#contact'>
								Contact
							</a>
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
