import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddDepartmentModal} from './AddDepartmentModal';
import {EditDepartmentModal} from './EditDerpatmentModal';

export class Department extends Component {
    constructor(p)
    {
        super(p);
        this.state = {
            deps: [],
            addModalShow: false,
            editModalShow: false
        }
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList()
    {
       
        fetch('http://localhost:59267/api/department')
            .then(response => response.json())
            .then(data => {
                this.setState({deps: data});
            });
    }

    componentDidUpdate()
    {
        //this.refreshList();
    }
    /*
    refreshList()
    {
        this.setState({
            deps: [
                {
                    "Id": 1,
                    "Name": "It"
                }, {
                    "Id": 2,
                    "Name": "Hr"
                }, {
                    "Id": 3,
                    "Name": "Support"
                }
            ]

        })
    }
    */
   

    render() {
        const {deps,departmentid,depratmentname} = this.state;
        let addModalClose = () => {this.setState({addModalShow: false});this.refreshList()};
        let editModalClose = () => {this.setState({editModalShow: false});this.refreshList()};
       
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Oprions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep => 
                        <tr key={dep.Id}>
                            <td>{dep.Id}</td>
                            <td>{dep.Name}</td>
                            <td>
                                <ButtonToolbar>
                                    <Button className="mr-2" variant="info" 
                                    onClick={()=>this.setState
                                    ({
                                        editModalShow:true,departmentid:dep.Id,departmentname:dep.Name})}>
                                     Edit
                                    </Button>
                                    <EditDepartmentModal
                                     show={this.state.editModalShow}
                                     onHide ={editModalClose}
                                     departmentid={departmentid}
                                     departmentname ={depratmentname}
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
                    <AddDepartmentModal 
                    show={this.state.addModalShow} 
                    onHide={addModalClose}
                    />
                </ButtonToolbar>
            </div>
        )
    }
}