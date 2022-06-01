import React from "react";
import "./css/Banner.css";
import { Card, Carousel, Container } from "react-bootstrap";

import "animate.css/animate.min.css";
const Banner = () => {
	return (
		<Card className='bg-dark text-white'>
			<Card.Img height={"700px"} src='/image/banner.png' alt='Card image' />
			<Card.ImgOverlay className='dark-overlay d-flex justify-content-center align-items-center'>
				<Container>
					<Carousel fade indicators={false} controls={false}>
						<Carousel.Item>
							<div className='carsoule-container'>
								<div className='animate__animated  animate__fadeInDown'>
									<h2 className='my-3'>first slide label</h2>
								</div>
								<div className='animate__animated  animate__fadeInUp'>
									<p className='text-white my-3'>
										Nulla vitae elit libero, a pharetra augue mollis interdum.
									</p>
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className='carsoule-container'>
								<div className='animate__animated  animate__fadeInDown'>
									<h3 className='my-3'>second slide label</h3>
								</div>
								<div className='animate__animated  animate__fadeInUp'>
									<p className='text-white my-3'>
										Nulla vitae elit libero, a pharetra augue mollis interdum.
									</p>
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className='carsoule-container'>
								<div className='animate__animated  animate__fadeInDown'>
									<h3 className='my-3'>third slide label</h3>
								</div>
								<div className='animate__animated  animate__fadeInUp'>
									<p className='text-white my-3'>
										Nulla vitae elit libero, a pharetra augue mollis interdum.
									</p>
								</div>
							</div>
						</Carousel.Item>
					</Carousel>
				</Container>
			</Card.ImgOverlay>
		</Card>
	);
};

export default Banner;
