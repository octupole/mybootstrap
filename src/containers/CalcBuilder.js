import React, { useState, useEffect } from 'react';
import Aux from '../components/Aux'
import { Col, Row, Container, Input, Buttons, Form, FormGroup, Label} from 'reactstrap';

import PrintLine from '../components/Layouts/PrintLine';


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
      salt: 1.8,
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
    <Container fluid>
      <Form>
        <FormGroup>
          <Row>
            <Col xs="2" lg={3}/>
          <Label xs={3} lg={1}><b> <center> Percentuale</center></b></Label>
          <Col xs="2" lg={1}/>
          <Label xs={3} lg={1}><b><center>Peso</center></b></Label>
        </Row>
        <PrintLine ingredient='Farine' 
          pe={{value: Pe.flour, readonly: true}} 
          in={{value: In.flour, readonly: true}}/>
        <PrintLine ingredient='Lievito Madre' 
          pe={{value: Pe.levain, readonly: false, onchange: (evt)=>peChangedHandler(evt,'levain')}} 
          in={{value: In.levain, readonly: true}}/>
        <PrintLine ingredient='Acqua' 
          pe={{value: Pe.water, readonly: false, onchange: (evt)=>peChangedHandler(evt,'water')}} 
          in={{value: In.water, readonly: true}}/>
        <PrintLine ingredient='Sale' 
          pe={{value: Pe.salt, readonly: false, onchange: (evt)=>peChangedHandler(evt,'salt')}} 
          in={{value: In.salt, readonly: true}}/>
        <PrintLine ingredient='Totale' 
          pe={{value: Pe.total, readonly: true }} 
          in={{value: In.total, readonly: false, onchange: (evt)=>inChangedHandler(evt)}}/>
        <PrintLine ingredient='Idratazione' 
          pe={{value: hydration.toFixed(1), readonly: true }}/>
          
        </FormGroup>
      </Form>
  </Container>      
    </Aux>
  )
}

export default CalcBuilder;
