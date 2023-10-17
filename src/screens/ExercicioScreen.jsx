import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function ExercicioScreen(){
    return(
        <Container>
            <h2> Olá ExercicioScreen</h2>
            <p>Sou a página de Exercicio</p>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Primeiro Nome</th>
          <th>Ultimo Nome</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Viviane</td>
          <td>Nahum</td>
          <td>@vivin</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Ana</td>
          <td>Julia</td>
          <td>@anaju</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Isabella Victória</td>
          <td>@Isabellavictoria</td>
        </tr>
      </tbody>
    </Table>



    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="girassol" title="Girassol">
        
        <img src="https://images.pexels.com/photos/7441239/pexels-photo-7441239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        
      </Tab>
      <Tab eventKey="ipe" title="ipe">
        
        <img src="https://images.pexels.com/photos/12030996/pexels-photo-12030996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      </Tab>
    </Tabs>

        </Container>
  );
}
export default ExercicioScreen;