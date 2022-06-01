import React from "react";
import "./css/about.css";
import { Row, Col, Container } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
	return (
		<Container>
			<Row className='sm-section-gap'>
				<Col lg={5} className='about_image-container overflow-hidden'>
					<ScrollAnimation
						animateOnce
						animateIn='animate__fadeInRight'
						className='about_image_1 about_image'>
						<img src='/image/banner.png' className='abt_img' alt='imaghe1' />
					</ScrollAnimation>

					<ScrollAnimation
						animateOnce
						animateIn='animate__fadeInLeft'
						className='about_image_2 about_image'>
						<img src='/image/banner.png' className='abt_img' alt='imaghe1' />
					</ScrollAnimation>
				</Col>
				<Col className='mx-auto'>
					<ScrollAnimation animateOnce animateIn='animate__fadeIn' delay={200}>
						<p className='text-white h2 ms-3'>About Us</p>
						<p className='text-white ms-3'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book Lorem Ipsum is
							simply dummy text of the printing and typesetting industry. Lorem
							Ipsum has been the industry's standard dummy text ever since the
							1500s, when an unknown printer took a galley of type and scrambled
							it to make a type specimen book Lorem Ipsum is simply dummy text
							of the printing and typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s, when an
							unknown printer took a galley of type and scrambled it to make a
							type specimen book
						</p>
					</ScrollAnimation>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
