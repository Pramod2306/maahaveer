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
		title: "Best Property",
		text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
	},
	{
		icon: <MdPeopleAlt fontSize='2vw' color='#fff' />,
		title: "Experience Agents",
		text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
	},
	{
		icon: <BiRupee fontSize='2vw' color='#fff' />,
		title: "Budget Friendly",
		text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
	},
];

function Home() {
	return (
		<div>
			<Header />

			<Banner />
			<ScrollAnimation animateIn='animate__fadeInUp'>
				<Service datas={Services} />
			</ScrollAnimation>

			<div className='bg-light'>
				<Container className='sm-section-gap'>
					<ScrollAnimation animateIn='animate__fadeIn'>
						<Row className='bg-white p-4  shadow'>
							<Col md={12} lg={6} className='overflow-hidden'>
								<img height={"500px"} src='/image/banner.png' alt='tet' />
							</Col>
							<Col md={12} lg={6} className='mx-auto'>
								<Row className='xs-section-gap'>
									<Col
										xs={3}
										md={3}
										className='d-flex justify-content-center align-items-center'>
										<div className='icon_bg d-flex justify-content-center align-items-center'>
											<HiOutlineChatAlt2 fontSize={"3vw"} color='#fff' />
										</div>
									</Col>
									<Col md={9} xs={9} className='d-flex flex-column '>
										<p className='h4'>Headings</p>
										<p className='text-secondary'>
											Lorem ipsum dolor sit amet, officia excepteur ex fugiat
											reprehenderit enim labore culpa sint ad nisi Lorem
											pariatur mollit ex esse exercitation amet. Nisi anim
										</p>
									</Col>
								</Row>
								<Row className='d-flex flex-row xs-section-gap'>
									<Col
										md={3}
										xs={3}
										className='d-flex justify-content-center align-items-center'>
										<div className='icon_bg d-flex justify-content-center align-items-center'>
											<HiOutlineChatAlt2 fontSize={"3vw"} color='#fff' />
										</div>
									</Col>
									<Col md={9} xs={9} className='d-flex flex-column '>
										<p className='h4'>Headings</p>
										<p className='text-secondary'>
											Lorem ipsum dolor sit amet, officia excepteur ex fugiat
											reprehenderit enim labore culpa sint ad nisi Lorem
											pariatur mollit ex esse exercitation amet. Nisi anim
										</p>
									</Col>
								</Row>
							</Col>
						</Row>
					</ScrollAnimation>
				</Container>
			</div>

			<Features />
			<Contact />

			<Footer />
		</div>
	);
}

export default Home;
