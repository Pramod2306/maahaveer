import React from "react";
import "./css/Banner.css";
import { Card, Carousel, Container } from "react-bootstrap";

import "animate.css/animate.min.css";
const Banner = () => {
	return (
		<Card id='home' className='bg-white border-0 text-white '>
			<Card.Img
				className='bannerbg_img'
				src='/image/banner.png'
				alt='Card image'
			/>
			<Card.ImgOverlay className='dark-overlay d-flex justify-content-center align-items-center'>
				<Container>
					<Carousel fade indicators={false}>
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

			<div className='curve'>
				<svg
					width='1700'
					height='630'
					viewBox='0 0 1201 121'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M0 1C440.307 78.6972 694.619 80.0864 1200 1V121H0V1Z'
						fill='#fff'
					/>
					<path
						d='M9.43275 2.45992C6.87818 1.96452 4.39973 1.47765 2 1C4.42714 1.47726 6.90533 1.96405 9.43275 2.45992C118.299 23.5718 365.42 60.1725 549.5 59C785 57.5 1191.5 -0.0821164 1199 -3.43995e-05C1199 3.99997 1200.5 49.4999 1200.5 49.4999C1200.5 49.4999 695.5 103.5 549.5 91C406.251 78.7355 141.062 28.2848 9.43275 2.45992Z'
						fill='#ADD8E6'
					/>
				</svg>
			</div>
		</Card>
	);
};

export default Banner;
