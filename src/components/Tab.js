import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, NavLink } from 'reactstrap';

const Tab = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="http://1.bp.blogspot.com/-jXK-ZLH-k-0/T-xMXiC9G8I/AAAAAAAAA80/e2TVPpDCPwc/s1600/MP15_M4_Carbine_03_by_CorsairSX.jpeg" alt="Erorr" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Tab;