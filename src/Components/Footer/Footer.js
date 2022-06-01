import React from "react";
import { Row, Col, Container, Nav } from "react-bootstrap";

const Footer = () => {
	return (
		<div className='bg-dark '>
			<Container>
				<Row className='sm-section-gap'>
					<Col>
						<p className='text-white h3'>
							Mahaveer
							<br /> Enterprise
						</p>
					</Col>
					<Col></Col>
					<Col></Col>
					<Col md={4}>
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
					</Col>
				</Row>
			</Container>
			<div className='border-top '>
				<p className='text-white text-center m-0 p-2'>
					All right reserved by Mahaveer Enterprise
				</p>
			</div>
		</div>
	);
};

export default Footer;
