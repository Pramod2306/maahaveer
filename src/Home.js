import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	Banner,
	Header,
	Service,
	Features,
	Footer,
	Contact,
} from "./Components";
import { Row, Col, Container } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { BiRupee } from "react-icons/bi";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { MdLocationCity, MdPeopleAlt } from "react-icons/md";

const Services = [
	{
		icon: <MdLocationCity fontSize='2vw' color='#fff' />,
		title: "BEST PROPERTIES:",
		text: "Bangalore is considered one of the most luxurious cities in India. Owning a property in such a city is still a dream to many. To make this has dream come true for our valuable customers, we are here, with exclusive properties around you.",
	},
	{
		icon: <MdPeopleAlt fontSize='2vw' color='#fff' />,
		title: "OUR AGENDA: ",
		text: "As India consists of cosmopolitan people, meeting the demands of the people and matching the current trend, and satisfying our customer needs and wants has been our top priority.Experience the pleasure of fine- living in the exquisite cities and towns of India.Every property buyer and seller are constant flux customers. It’s always been our top priority and requirement to meet the increasing demands of our customers",
	},
	{
		icon: <BiRupee fontSize='2vw' color='#fff' />,
		title: "BUDGET-FRIENDLY”",
		text: "The simplest form of budget-friendly is “cost-effective” We try all our way out to find the best prices affordable and match the current trend to satisfy our customer requirement. We believe in Quality.We provide different methods of payment to lessen the burden on our valuable customers.",
	},
];

function Home() {
	return (
		<div>
			<Header />
			<div
				data-bs-spy='scroll'
				data-bs-target='#navbar'
				data-bs-offset='0'
				class='text-lightBlue'
				tabindex='0'>
				<Banner />

				<div id='about' className=''>
					<Container className='sm-section-gap'>
						<ScrollAnimation animateIn='animate__fadeIn'>
							<Row className='bg-white p-4  shadow'>
								<Col md={12} lg={6} className='overflow-hidden'>
									<img height={"500px"} src='/image/banner.png' alt='tet' />
								</Col>
								<Col md={12} lg={6} className=' py-4'>
									<Row className='xs-section-gap'>
										<Col md={12} xs={12} className='d-flex flex-column ps-5 '>
											<p className='h4'>About</p>
											<p className='text-secondary'>
												Mahaveer Enterprises was founded by it’s one of the
												leading Real Estate agencies in Bangalore India. REAL
												Estate is a tangible asset and making the right
												investment at the right time is the most challenging
												work. It’s a medium to long-term investment. With the
												rapid change in trends and high demands of the customer.
												you are at the right place.
											</p>
											<p className='text-secondary'>
												We know exactly what you need and what you like. We know
												you want to feel engaged, entertained, and secured and
												at the same time, your value of time and money should be
												paid off.
											</p>
											<p className='text-secondary'>
												As our enterprise implies, we are not limited to homes
												and plots alone, we do specialize in it, but we are all
												about homes, lands, apartments, Commercial spaces,
												rentals, selling, and buying.
											</p>
										</Col>
									</Row>
								</Col>
							</Row>
						</ScrollAnimation>
					</Container>
				</div>

				<Service datas={Services} />

				<Features />
				<Contact />
			</div>

			<Footer />
		</div>
	);
}

export default Home;
