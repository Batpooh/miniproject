import React, { useState } from 'react';
import { Table, NavLink, Collapse, Button, CardBody, Card } from 'reactstrap';
import './Admin.css'

const Tab = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Table bordered className="white">
      <thead>
        <tr>
          <th>#</th>
          <th>WEAPON IMAGE</th>
          <th>WEAPON DETAILS</th>
          <th>WEAPON INFORMATIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <img src="https://cdn11.bigcommerce.com/s-yrjoy4/images/stencil/2048x2048/products/1953/6568/STAG15001101-1__60093.1576040303.jpg?c=2" height = "250" width = "250" ></img>
          <td class="m4"><NavLink href="https://cdn11.bigcommerce.com/s-yrjoy4/images/stencil/2048x2048/products/1953/6568/STAG15001101-1__60093.1576040303.jpg?c=2">M4A1</NavLink></td>
          
          <td class="center">
          <Button id="but1" color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
          <Collapse isOpen={isOpen}>
          <Card>
          <CardBody>
          
          </CardBody>
          </Card>
          </Collapse>
          </td>

          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tab;