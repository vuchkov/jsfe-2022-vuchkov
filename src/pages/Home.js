import ClassComponent from "../components/ClassComponent";
import { Col } from 'react-bootstrap';
import FunctionalComponent from '../components/FunctionalComponent';

function Home() {
  return (
    <>
        <Col md={4}>
          <ClassComponent lastName="Petrov"/>
          <ClassComponent lastName="Ivanov"/>
          <ClassComponent lastName="Georgiev"/>
        </Col>
        <Col md={4}>
          <FunctionalComponent>
            <div>....</div>
            <span></span>
            <p></p>
          </FunctionalComponent>
          <FunctionalComponent>
            <p>....</p>
          </FunctionalComponent>
        </Col>
  </>
  );
}

export default Home;
