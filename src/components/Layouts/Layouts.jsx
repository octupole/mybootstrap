import React from 'react';
import bgimage from '../../assets/images/theperfectloaf.jpg';
import { Jumbotron, Container } from 'reactstrap';
import Aux from '../Aux';
const styleImg={
    position: 'relative',
    left: 0,
    top: '0px',
    WebkitBackgroundSize: 'cover',
    backgroundSize: 'cover',
    width: '100%',
    opacity: '0.8',
    backgroundImage: "url("+bgimage+")",
    height: 'cover',
    color: '#494040',
    textShadow: '2px 2px 5px white'
  }
const layout = ( props ) => (
    <Aux>
    <Jumbotron style={styleImg}>
      <Container>
    <h1 className="text-center"><b>Calcolatore Lievito Madre</b></h1><br/>
    <h2 className="text-center">Come convertire percentuali in peso per ciascun componente dell&#39;impasto</h2>    
    </Container>
    </Jumbotron>
    <Container>{props.children}</Container>
            
    </Aux>
);

export default layout;