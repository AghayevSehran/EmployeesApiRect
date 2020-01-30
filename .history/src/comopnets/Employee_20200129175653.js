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
      
        const {emps,employeeid,employeename} = this.state;
        let addModalClose = () => {this.setState({addModalShow: false});this.refreshList()};
        let editModalClose = () => {this.setState({editModalShow: false});this.refreshList()};
       
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>DepartmentId</th>
                            <th>DepartmentName</th>
                            <th>Email</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emps.map(emp => 
                        <tr key={emp.Id}>
                            <td>{emp.Id}</td>
                            <td>{emp.Name}</td>
                            <td>
                                <ButtonToolbar >
                                    <Button  variant="info" 
                                    onClick={()=>this.setState
                                    ({
                                        editModalShow:true,departmentid:emp.Id, departmentname:emp.Name})}>
                                     Edit
                                    </Button>
                                    <Button variant="danger" onClick={() => this.deleteDepartment(emp.Id)}>
                                        Delete
                                     </Button>  
                                    <EditEmployeeModal
                                     show = {this.state.editModalShow}
                                     onHide = {editModalClose}
                                     departmentid = {employeeid}
                                     departmentname = {employeename}
                                    />  

                                </ButtonToolbar>
                            </td>
                        </tr>)}
                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button variant="primary" onClick={() => this.setState({addModalShow: true})}>
                        Add Department
                    </Button>
                    <AddEmployeeModal 
                    show={this.state.addModalShow} 
                    onHide={addModalClose}
                    />
                </ButtonToolbar>
            </div>
        )
    }
}