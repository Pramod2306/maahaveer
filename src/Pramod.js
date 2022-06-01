import React from "react";
import { Header, Banner, About, Whyus } from "./Component";
import "./pramod.css";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { Container } from "react-bootstrap";
const Pramod = () => {
	return (
		<div>
			<Header />
			<Banner />
			<div className='border-bottom'>
				<Container>
					<div className='d-flex justify-content-end mt-2'>
						<div className='d-flex align-items-baseline'>
							<MdLocationOn color='#fff' />
							<p className='text-white ms-2'>
								99, N R Road,Bangalore,Karnataka,560002
							</p>
						</div>
						<div className='d-flex align-items-baseline ms-4 '>
							<MdPhone color='#fff' />
							<p className='text-white ms-2'>99560002</p>
						</div>
					</div>
				</Container>
			</div>
			<About />
			<Whyus />
		</div>
	);
};

export default Pramod;
