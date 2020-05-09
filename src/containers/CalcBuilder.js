import React, { useState, useEffect } from 'react';
import Aux from '../components/Aux'
import { Col, Row, Container, Input, Buttons, Form, FormGroup, Label, FormText } from 'reactstrap';
import Auxiliary from './Auxiliary';

const CalcBuilder = (props) => {

  const [In, setIngredients] = useState(
    {
      flour: 0,
      water: 0,
      levain: 0,
      salt: 0,
      total: 700
    });

  const [Pe, setPercent] = useState(
    {
      flour: 100,
      water: 60,
      levain: 20,
      salt: 3,
      total: 0,
    });
  const [hydration, setHydration] = useState(0);
  const [coef, setCoef] = useState(0);

  
  const peChangedHandler = (event,id) => {
    let myPe = { ...Pe };
    let myIn = { ...In };

    myPe[id]=parseFloat(event.target.value);

    myPe.total = myPe.flour + myPe.water + myPe.levain+myPe.salt;
    let myHydration = 100 * (myPe.levain * 0.5 + myPe.water) / (myPe.levain * 0.5 + myPe.flour);
    let coef = myIn.total / myPe.total;

    for (let it in myPe) {
      myIn[it] = myPe[it] * coef;
    }
    setPercent(myPe);
    setIngredients(myIn);
    setHydration(myHydration);
    setCoef(coef);

  }
  const inChangedHandler = (event) => {
    let myPe = { ...Pe };
    let myIn = { ...In };
    myIn.total=parseFloat(event.target.value);
    let coef = myIn.total / myPe.total;
    for (let it in myPe) {
      myIn[it] = myPe[it] * coef;
    }
    setIngredients(myIn);
  }
  const initializeData=()=>{
    let myPe = { ...Pe };
    let myIn = { ...In };
    myPe.total = myPe.flour + myPe.water + myPe.levain+myPe.salt;
    let myHydration = 100 * (myPe.levain * 0.5 + myPe.water) / (myPe.levain * 0.5 + myPe.flour);
    let coef = myIn.total / myPe.total;

    for (let it in myPe) {
      myIn[it] = myPe[it] * coef;
    }
    setPercent(myPe);
    setIngredients(myIn);
    setHydration(myHydration);
    setCoef(coef);
  }
  useEffect( ()=> initializeData(),[]);
  return (
    <Aux>
      <Container> <h1> Hello There </h1></Container>
      <Form>
        <FormGroup>
          <Row>
          <Label sm={2}>Farina</Label>
          <Col sm={2}>
            <Input type='number' value={Pe.flour} disabled />            
          </Col>
          <Col sm={2}>
            <Input type='number' value={In.flour.toFixed(1)}/>       
            </Col>
        </Row>
          <Row>
          <Label sm={2}>Lievito Madre</Label>
            <Col sm={2}>
            <Input type='number' value={Pe.levain}  onChange={(evt)=>peChangedHandler(evt,'levain')} />       
            </Col>
            <Col sm={2}>
            <Input type='number' value={In.levain.toFixed(1)}/>       
            </Col>
          </Row>
          <Row>
          <Label sm={2}>Acqua</Label>
            <Col sm={2}>
            <Input type='number' value={Pe.water}  onChange={(evt)=>peChangedHandler(evt,'water')} />       
            </Col>
            <Col sm={2}>
            <Input type='number' value={In.water.toFixed(1)}/>       
            </Col>
          </Row>
          <Row>
          <Label sm={2}>Sale</Label>
            <Col sm={2}>
            <Input type='number' value={Pe.salt}  onChange={(evt)=>peChangedHandler(evt,'salt')} />       
            </Col>
            <Col sm={2}>
            <Input type='number' value={In.salt.toFixed(1)}/>       
            </Col>
          </Row>
          <Row>
          <Label sm={2}>Totale</Label>
            <Col sm={2}>
            <Input type='number' value={Pe.total.toFixed(1)} disabled />       
            </Col>
            <Col sm={2}>
            <Input type='number' value={In.total.toFixed(0)} onChange={(evt)=>inChangedHandler(evt)} />       
            </Col>
          </Row>
          <Row>
          <Label sm={2}>Hydration</Label>
            <Col sm={2}>
            <Input type='number' value={hydration.toFixed(1)} />       
            </Col>
          </Row>
        </FormGroup>
      </Form>
    </Aux>
  )
}

export default CalcBuilder;