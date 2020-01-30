import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddEmployeeModal} from './AddEmployeeModal';

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
                this.setState({emps: data});
            });
    }
    deleteDepartment(employeeid)
    {
        if(window.confirm('Are you sure?'))
        {
         fetch('http://localhost:59267/api/employee?employeeid='+employeeid,{
             method: 'DELETE',
             header: {'Accept':'application/json',
                      'Content-Type':'application/json'}
         }).then(data => {
             this.refreshList();
         });
        }
    }
    render(){
      
        return (
            <div>  
            </div>
        )
    }
}