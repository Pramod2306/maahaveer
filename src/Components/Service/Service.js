import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./service.css";
import ScrollAnimation from "react-animate-on-scroll";

const Service = ({ datas }) => {
	return (
		<Container id='about'>
			<Row className=' overflow-hidden  section-gap'>
				{datas.map((data, index) => {
					return (
						<Col
							key={index}
							className='p-3'
							xs={12}
							sm={12}
							md={6}
							lg={12 / datas.length}>
							<ScrollAnimation
								animateIn='animate__fadeInUp '
								delay={index * 50}>
								<Card className='w-100  p-1 shadow hoverBorder'>
									<Card.Body className=' d-flex justify-content-center align-items-center flex-column'>
										<div
											className='icon-bg m-2'
											style={{ backgroundColor: "lightblue" }}>
											{data.icon}
										</div>
										<Card.Title className='m-2'>{data.title}</Card.Title>
										<Card.Text className='text-center text-secondary m-2'>
											{data.text}
										</Card.Text>
									</Card.Body>
								</Card>
							</ScrollAnimation>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default Service;
