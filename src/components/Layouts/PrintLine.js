import React from 'react';
import { Col, Row, Input, Label } from 'reactstrap';

const printLine = (props) => {
    if(props.in === undefined){
        return(
        <Row>
            <Col lg={1} xs={0} />
            <Label xs={3} lg={2}><b>{props.ingredient}</b></Label>
            <Col xs={4} lg={2}>
                <Input type='number' onChange={props.pe.onchange} value={props.pe.value} readOnly={props.pe.readonly} />
            </Col>
            <b>%</b>
        </Row>
        )
    }
    return (
        <Row>
            <Col lg={1} xs={0} />
            <Label xs={3} lg={2}><b>{props.ingredient}</b></Label>
            <Col xs={4} lg={2}>
                <Input type='number' onChange={props.pe.onchange} value={props.pe.value} readOnly={props.pe.readonly} />
            </Col>
                <b>%</b>
            <Col xs="4" lg={2}>
                <Input type='number' onChange={props.in.onchange} value={props.in.value.toFixed(1)} readOnly={props.in.readonly} />
            </Col>
            <Col xs="0">
                <b>g</b>
            </Col>
        </Row>

    )
}

export default printLine;