import React,{Component} from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';

export class AddDepartmentModal extends Component{

// eslint-disable-next-line no-useless-constructor
constructor(props){
    super(props);
 }

 handleSubmit(event)
 {
   
   event.preventDefault();
   alert(event.target.Name.value);
 }

 render()
 {
    return(
        <Modal
      {...this.props}
      size= "lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Depratment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <div className="container">
       <Row>
         <Col sm={6}>
           <Form onSubmit = {this.handleSubmit}>
             <Form.Group controlId = "Name">
               <Form.Label>Derpartment name</Form.Label>
               <Form.Control
               type="text"
               name="Name"
               required
               placeholder="Department name"/>
             </Form.Group>
           </Form>
         </Col>
       </Row>
    </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
 }
}