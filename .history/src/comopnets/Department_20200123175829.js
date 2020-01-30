import React,{Component} from 'react';
import  {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddDemartmentModal} from './AddDepartmentModal'

export class Department extends Component {
    constructor(p)
    {
        super(p);
        this.state = {deps:[]}
    }
    
    componentDidMount(){
        fetch('http://localhost:59267/api/department')
         .then(response=>response.json())
         .then(data => {
          this.setState({deps:data});
        })
      this.refreshList();
    }

    refreshList()
    {
       this.setState({
        deps:[{"Id":1,"Name":"It"},{"Id":2,"Name":"Hr"},{"Id":3,"Name":"Support"}]

       })
    }

    render(){
        const {deps} = this.state;
        return(
            <Table className="mt-4" striped bordered hover size="sm">
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>Name</th>
                  </tr>
              </thead>
              <tbody>
                  {deps.map(dep=>
                    <tr key={dep.Id}>
                        <td>{dep.Id}</td>
                        <td>{dep.Name}</td>
                    </tr>
                    )}
              </tbody>
            </Table>
        )
    }
}