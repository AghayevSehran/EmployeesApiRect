import React,{Component} from 'react';
import  {Table} from 'react-bootstrap';

export class Department extends Component {
    constructor(props)
    {
        super(props);
        this.state = {deps:[]}
    }
  
    render(){
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