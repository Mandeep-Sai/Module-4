import React from 'react';
import { Container , Row , Col } from "react-bootstrap";

class MyFooter extends React.Component{
  render(){
    return(
      <>
        <Container fluid className='footer'>
            <Row className="mt-5">
              <Col>
                <p>Audio and Subtitle</p>
                <p>Media Center</p>
                <p>Privacy</p>
                <p>Contact Us</p>
              </Col>
              <Col>
                <p>Audio Description</p>
                <p>Investor Relations</p>
                <p>Legal Notices</p>
              </Col>
              <Col>
                <p>Help Center</p>
                <p>Jobs</p>
                <p>Cookie Preferences</p>
              </Col>
              <Col>
                <p>Gift Cards</p>
                <p>Terms of Use</p>
                <p>Corporate Information</p>
              </Col>
            </Row>
            <p > &copy; 1997-2019 Netflix, Inc.</p>

        </Container>
      </>
    )
  }
}
export default MyFooter