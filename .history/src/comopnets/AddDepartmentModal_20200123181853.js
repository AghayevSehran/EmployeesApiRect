import React,{Component} from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';

export class AddDepartmentModal extends Component{

// eslint-disable-next-line no-useless-constructor
constructor(props){
    super(props);
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

    </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
 }
}