import React from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
const Contact = () => {
	return (
		<div id='contact' className='bg-light mt-5 xs-section-gap'>
			<Container className='xs-section-gap'>
				<p className='text-center h3 mb-4'>Contact Us</p>
				<Row className=' pt-4'>
					<Col
						xs={{ order: "last", span: 12 }}
						sm={{ order: "last", span: 12 }}
						md={{ order: "last", span: 12 }}
						lg={{ order: "first", span: 5 }}
						className='hand'>
						<img style={{ height: "100%" }} src='/image/handnb.png' alt='' />
					</Col>
					<Col lg={7}>
						<Form>
							<Row className='mb-3'>
								<Form.Group as={Col} controlId='FirstName'>
									<Form.Label>First Name</Form.Label>
									<Form.Control type='text' placeholder='Enter First Name' />
								</Form.Group>

								<Form.Group as={Col} controlId='lastname'>
									<Form.Label>Last Name</Form.Label>
									<Form.Control type='text' placeholder='Last Name' />
								</Form.Group>
							</Row>
							<Row className='mb-3'>
								<Form.Group as={Col} controlId='Email'>
									<Form.Label>Email</Form.Label>
									<Form.Control type='email' placeholder='Enter email' />
								</Form.Group>
							</Row>
							<Row>
								<Form.Group as={Col} controlId='Phone'>
									<Form.Label>Phone Number</Form.Label>
									<Form.Control type='number' placeholder='Phone Number' />
								</Form.Group>
							</Row>
							<Row>
								<Form.Group as={Col} controlId='Phone'>
									<Form.Label>Send Your Query</Form.Label>
									<Form.Control as='textarea' rows={3} />
								</Form.Group>
							</Row>

							<Button variant='primary' type='submit' className='mt-4'>
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Contact;
