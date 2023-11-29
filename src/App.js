import React from "react";
import Card from 'react-bootstrap/Card';
import Name from "./Name"
import Price from "./Price";
import product from "./Product";
import Description from "./Description";
import {Image, Icons} from "./image";
import "./styles.css"


const firstname = "Ekene"
const App = () => {
    return(
        <div className="product-card">
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= "https://media.istockphoto.com/id/509492163/photo/bugatti-veyron.jpg?s=2048x2048&w=is&k=20&c=A8Nw7K4vlEPOmir1W-hz5xIBDu5pDscnIOPqAAGmza8=" />
      <Card.Body>
        <Card.Title>
          <Name />
        </Card.Title>
        <Card.Text>
          <Description />
        </Card.Text>
        <Card.Footer>
          <Price />
        </Card.Footer>
      </Card.Body>
    </Card>
    <div className="Greeting">
    <p>Hello {firstname ? firstname : "there"}!</p>
    {firstname && <Icons/>}
    </div>
        </div>
    )
}
export default App