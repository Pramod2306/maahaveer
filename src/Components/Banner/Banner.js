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

			<div className='custom-shape-divider-bottom-1654086621'>
				<svg
					data-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1200 120'
					preserveAspectRatio='none'>
					<path
						d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
						className='shape-fill'></path>
				</svg>
			</div>
		</Card>
	);
};

export default Banner;
