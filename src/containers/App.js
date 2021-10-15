import React from 'react';

import './App.css';
import Layout from '../components/Layouts/Layouts'
import Aux0 from '../components/Aux0';
import CalcBuilder from './CalcBuilder';
import Recepies from '../components/recepies';

import {
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';

//import Example from '../components/example';

const App= ()=> {
  return (
    <Aux0>
      <Layout>
      <Navbar color="light" light expand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink activeStyle={{color: '#fa923f',textDecoration: 'underline'}} 
              style={{paddingRight: '30px',fontSize: '24px'}} to="/" exact >Ricette
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeStyle={{color: '#fa923f',textDecoration: 'underline'}} 
              style={{paddingRight: '30px',fontSize: '24px'}}  to="/Calculator" exact>Calcolatore
              </NavLink>
            </NavItem>
            </Nav>
            </Navbar>
            <Switch>
              <Route path="/Calculator" strict exact component={CalcBuilder} />
              <Route path="/" exact component={Recepies} />
            </Switch>
      </Layout>
    </Aux0>
  );
}
/*
function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
    console.log(value);
    let newValue = event.target.value;
    setValue(newValue);
    //setValue({value: event.target.value});
  }

  return (

      <Aux0>
      <Layout>  
        <DoIt/>
      </Layout>
      </Aux0>



  );
}
*/

{/*       <Container >
        <br />
        <Form>
          <FormGroup row>
            <Label for="exampleText" sm={2}>Text</Label>
            <Col sm={5}>
              <Input
                type="number"
                name="mytext"
                id="exampleText"
                placeholder="Input a number"
                value={value}
                onChange={handleChange} />
            </Col>
          </FormGroup>
        </Form>
        {value === undefined || value === 0 ? '' : value * 10}
      </Container> */
    }

export default App;
