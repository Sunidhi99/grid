import React from 'react';
import{Container,Row,Col,Image} from 'react-bootstrap';
import './Grid.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import new1 from './image/new2.jpeg';
import new2 from './image/new3.jpeg';
import new3 from './image/new4.jpeg';

const Grid = () =>{
	return(

       <div >
       <div className="new">
         <img src={new1} className="main" />
       </div>
       <div>
         <Container  className="tainer">
            <Row>
             <p> <Col><img src={new1} className="columns1"/></Col> </p>
             <p><Col><img src={new2} className="columns2"/></Col> </p>
             <p><Col> <img src={new3} className="columns3" /></Col> </p>
            </Row>
            <Row  >
              <p><Col> <Image src={new1} className="columns4" /></Col> </p>
              <p><Col><img src={new2}  className="columns5"/></Col> </p>
              <p><Col> <img src={new3}  className="columns6"/></Col> </p>
            </Row>
            <Row >
              <p><Col><img src={new1} className="columns7" /></Col> </p>
              <p><Col><img src={new2} className="columns8" /></Col> </p>
              <p><Col><img src={new3} className="columns9" /></Col> </p>
            </Row>
         </Container>
         </div>

       </div>

    )
}
  


export default Grid;