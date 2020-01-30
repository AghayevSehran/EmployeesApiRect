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
        fetch('http://localhost:59267/api/department', {
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
        return(
            <div className="mt-5 d-flex jsutify-content-left">
              <h3>Welcome to Employee Management Portal.
                  This is the Home page.
              </h3>
            </div>
        )
    }
}