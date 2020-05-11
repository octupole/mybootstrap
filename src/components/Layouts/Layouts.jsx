import React from 'react';
import bgimage from '../../assets/images/theperfectloaf.jpg';
import { Jumbotron, Container } from 'reactstrap';
import Aux from '../Aux';


const styleImg={
  fontFamily: "'Open Sans', sansSerif",
    position: 'relative',
    left: 0,
    top: '0px',
    WebkitBackgroundSize: 'cover',
    backgroundSize: 'cover',
    width: '100%',
    opacity: '0.8',
    backgroundImage: "url("+bgimage+")",
    height: 'cover',
    color: 'black',
    textShadow: '10px 10px 10px white'
  }
const layout = ( props ) => (
    <Aux>
    <Jumbotron style={styleImg}>
      <Container>
    <h1 className="text-center"><b>Lievito Madre</b></h1><br/>
    <h2 className="text-center"><b>Calcolo Ingredienti e Ricette</b></h2>    
    </Container>
    </Jumbotron>
    <Container>{props.children}</Container>
            
    </Aux>
);

export default layout;