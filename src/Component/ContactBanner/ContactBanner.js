import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Card, Container, Button } from "react-bootstrap";
import "./css/ContactBanner.css";

const ContactBanner = () => {
	return (
		<Container className='overflow-hidden'>
			<ScrollAnimation animateIn='animate__fadeInUp'>
				<Card className='border-0 bg-customDark'>
					<div className='d-flex justify-content-between'>
						<div className='mx-auto'>
							<p className='text-white h2 my-3'>Get Free Consulation</p>
							<Button
								className='bg-light  w-75'
								style={{ color: "#F66700" }}
								variant='sm'>
								Contact Us
							</Button>
						</div>
						<div className='orangeContainer'>
							<div className='contactBanner_overlay'></div>
							<img
								className='contactBanner_image'
								src='/image/orangebg.png'
								alt=''
							/>
						</div>
					</div>
				</Card>
			</ScrollAnimation>
		</Container>
	);
};

export default ContactBanner;
