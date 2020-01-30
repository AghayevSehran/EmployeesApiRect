import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddEmployeeModal} from './AddEmployeeModal';
import {EditEmployeeModal} from './EditEmployeeModal';

export class Employee extends Component {
  
    constructor(p)
    {
        super(p);
        this.state = {
            emps: [],
            addModalShow: false,
            editModalShow: false
        }
    }
    componentDidMount() {
        this.refreshList();
    }

    refreshList()
    {
       
        fetch('http://localhost:59267/api/employee')
            .then(response => response.json())
            .then(data => {
                this.setState({deps: data});
            });
    }

    render(){
        return(
            <div className="mt-5 d-flex jsutify-content-left">
              <h3>This is the Employee page.
              </h3>
            </div>
        )
    }
}