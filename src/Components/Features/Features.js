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
							title: "Mordern House",
							text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
						}}
					/>
				</ScrollAnimation>

				<ScrollAnimation animateIn='animate__fadeInUp' delay={100} animateOnce>
					<SectionCards
						data={{
							title: "Appartment House",
							img: "/image/appartment.png",
							text: "Lorem Ipsum is simply dummy text of the printing and typesettingNisianimcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem estaliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud offici standard dummy text ever.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Lorem Ipsum is simply dummy text the printing and typesettingNisianimcupidatat excepteur standard dummy text ever.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
						}}
						left={true}
					/>
				</ScrollAnimation>
				<ScrollAnimation animateIn='animate__fadeInUp' delay={200} animateOnce>
					<SectionCards
						data={{
							title: "Cottage House",
							img: "/image/cottage.png",
							text: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enimlabore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisianimcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem estaliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud offici",
						}}
						left={false}
					/>
				</ScrollAnimation>
			</Container>
		</div>
	);
};

export default Features;
