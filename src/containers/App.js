import React from 'react';

import './App.css';
import Layout from '../components/Layouts/Layouts'
import Aux from '../components/Aux';
import CalcBuilder from './CalcBuilder';


//import Example from '../components/example';

const App= ()=> {
  return (
    <Aux>
      <Layout>
        <CalcBuilder/>
      </Layout>
    </Aux>
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

      <Aux>
      <Layout>  
        <DoIt/>
      </Layout>
      </Aux>



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
