import React from "react";
import "./css/service.css";
import { Container, Card } from "react-bootstrap";

const Service = () => {
	return (
		<div className='sm-section-gap'>
			<Container>
				<p className='h5 text-white'>What you need</p>
				<p className='h3 text-white'>We Fullfill Your Every Needs</p>
				<div>
					<Card>
						<Card.Img />
						<Card.ImgOverlay></Card.ImgOverlay>
					</Card>
				</div>
			</Container>
		</div>
	);
};

export default Service;
