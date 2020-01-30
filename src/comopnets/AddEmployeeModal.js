import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export class AddEmployeeModal extends Component {
      // eslint-disable-next-line no-useless-constructor
      constructor(props) {
        super(props);

        this.state = {
            snackbaropen: false,
            sackbarmsg: ''
        };
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }
    snackbarClose = (event) =>{
        this.setState({snackbaropen: false});
    }

    handleSubmit(event)
    {
        event.preventDefault();
        fetch('http://localhost:59267/api/employee', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({id: null, name: event.target.Name.value})
            })
            .then(res => res.json())
            .then((result) => {
               // alert(result);
               this.setState({snackbaropen:true,sackbarmsg:result});

            }, (error) => {
                this.setState({snackbaropen:true,sackbarmsg:'failed'});
            })
    }
    render(){
        return (
            <div className="container">

                <Snackbar anchorOrigin={{vertical:'bottom',horizontal:'right'}}
                open = {this.state.snackbaropen}
                autoHideDuration={3000}
                onClose={this.snackbarClose}
                message ={<span id = "message-id">{this.state.sackbarmsg}</span>}
                
                action ={[
                    <IconButton
                     key="close"
                     arial-label="Close"
                     color = "inherit"
                     onClick = {this.snackbarClose}>
                        X
                    </IconButton>
                ]}             
                
                > 

                </Snackbar>

                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Depratment
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="Name">
                                        <Form.Label>Derpartment name</Form.Label>
                                        <Form.Control type="text" name="Name" required placeholder="Department name"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Derpartment
                                        </Button>
                                    </Form.Group>
                                </Form>

                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}