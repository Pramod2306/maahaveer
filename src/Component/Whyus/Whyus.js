import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import { Row, Col, Card, Container } from "react-bootstrap";

const Whyus = () => {
	return (
		<div>
			<Container>
				<ScrollAnimation animateOnce animateIn='animate__fadeIn'>
					<p className='text-center h2 text-white py-2'>Why Us</p>
					<p className='text-center h4 text-white py-2'>
						We Provide Best Service From Us{" "}
					</p>
				</ScrollAnimation>

				<Row className='sm-section-gap'>
					<Col md={4} xs={12} sm={12}>
						<ScrollAnimation animateOnce animateIn='animate__fadeInUp'>
							<Card className=' main'>
								<Card.Body className='d-flex flex-column justify-content-center align-items-center'>
									<div className='icon_bg'>
										<img className='icon' src='/image/home_work.png' alt='dd' />
									</div>
									<p className='text-white mt-3'>Best Property</p>
									<p className='text-secondary text-center'>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the industry's
										standard dummy text ever{" "}
									</p>
								</Card.Body>
							</Card>
						</ScrollAnimation>
					</Col>

					<Col md={4} xs={12} sm={12}>
						<ScrollAnimation
							animateOnce
							animateIn='animate__fadeInUp'
							delay={100}>
							<Card className='main'>
								<Card.Body className='d-flex flex-column justify-content-center align-items-center'>
									<div className='icon_bg'>
										<img className='icon' src='/image/people.png' alt='dd' />
									</div>
									<p className='text-white mt-3'>Best Property</p>
									<p className='text-secondary text-center'>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the industry's
										standard dummy text ever{" "}
									</p>
								</Card.Body>
							</Card>
						</ScrollAnimation>
					</Col>

					<Col md={4} xs={12} sm={12}>
						<ScrollAnimation
							animateOnce
							animateIn='animate__fadeInUp'
							delay={200}>
							<Card className='main'>
								<Card.Body className='d-flex flex-column justify-content-center align-items-center'>
									<div className='icon_bg '>
										<img className='icon' src='/image/rupee.png' alt='dd' />
									</div>
									<p className='text-white mt-3'>Best Property</p>
									<p className='text-secondary text-center'>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the industry's
										standard dummy text ever{" "}
									</p>
								</Card.Body>
							</Card>
						</ScrollAnimation>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Whyus;
