import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="1">Column</Col>
        <Col xs="3">Column</Col>
        <Col xs="3">Column</Col>
        <Col xs="3">Column</Col>
      </Row>
    </Container>
  );
}

export default Example;