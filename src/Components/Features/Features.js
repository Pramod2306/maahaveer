import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

const SectionCards = ({ left, data }) => {
	return (
		<div className='xs-section-gap overflow-hidden'>
			<Row className='d-flex justify-content-center align-items-center'>
				<Col
					xs={{ order: "first", span: 12 }}
					md={{ order: "first", span: 12 }}
					lg={{ order: `${left ? "last " : "first"}`, span: 5 }}
					className='image_container '>
					<img
						style={{ objectFit: "contain", width: "100%", height: "100%" }}
						src={data.img}
						alt=''
					/>
				</Col>
				<Col
					xs={{ order: "last", span: 12 }}
					md={{ order: "first", span: 12 }}
					lg={{ order: `${left ? "first " : "last"}`, span: 7 }}>
					<p className='h3 text-center text-lg-start'>{data.title}</p>
					<p className='text-secondary w-100'>{data.text}</p>
				</Col>
			</Row>
		</div>
	);
};

const Features = () => {
	return (
		<div id='service' className='sm-section-gap'>
			<Container>
				<p className='h3 text-center text-border my-2'>
					We Fullfll Your Every Needs
				</p>
				<p className='text-center my-4 pt-4'>
					Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
					cillum sint consectetur cupidatat.
				</p>
				<ScrollAnimation animateIn='animate__fadeInUp' animateOnce>
					<SectionCards
						left={false}
						data={{
							img: "/image/mordern.png",
							title: "READY TO MOVE IN",
							text: "Indian real estate has grown drastically with the growing trend and population.Ready to move in has become a top pick of our customers. It helps the buyer avoid any delay due to construction",
						}}
					/>
				</ScrollAnimation>

				<ScrollAnimation animateIn='animate__fadeInUp' delay={100} animateOnce>
					<SectionCards
						data={{
							img: "/image/appartment.png",
							title: "COMMERCIAL VENTURE",
							text: "Investing at the right time and in the right property is a wise investment that you can reap the benefits over the years. Hence, such a venture is commercial.Investing in a large property or small for a value in return commercial venture is the best option.",
						}}
						left={true}
					/>
				</ScrollAnimation>
				<ScrollAnimation animateIn='animate__fadeInUp' delay={200} animateOnce>
					<SectionCards
						data={{
							img: "/image/cottage.png",
							title: "Let’s start from “The Start”",
							text: "The Start”, purchase of plot, construction of the house, and stepping into a new home is almost like a dream come true. It’s an analysis and pays off of sleepless nights and hard work.Hence, we are here to support and make your dream come true with fine living in the exquisite city of Bangalore.",
						}}
						left={false}
					/>
				</ScrollAnimation>
			</Container>
		</div>
	);
};

export default Features;
