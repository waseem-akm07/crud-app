import React from 'react';


class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Employee: null
        }
    }

    componentDidMount() {
        this.getEmployee();
    }


    getEmployee() {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then((emp) => emp.json())
            .then((empjson) => {
                this.setState({ Employee: empjson })

                // alert(JSON.stringify(empjson))
            })
    }

    onEditClick = (item) => {

        this.props.history.push( '/edit', item)
      //  alert(JSON.stringify(item))
      //  this.props.history.push('/edit');

        //     this.props.history.push({
        //         pathname: '/edit',
        //        // search: '?query=item',
        //        // state: { Employee: item.id }
        //       })
    }

    getDetail = () => {
        if (this.state.Employee !== null) {
            let empno = [];
            this.state.Employee.map((item) => {
                empno.push(
                    <div class="container">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Employee Id</th>
                                    <th>Name</th>
                                    <th>Salary</th>
                                    <th>Age</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.employee_name}</td>
                                    <td>{item.employee_salary}</td>
                                    <td>{item.employee_age}</td>
                                    <td><input type="submit" value="Edit" onClick={() => this.onEditClick(item)} className="btn btn-primary" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            })
            return empno
        }
    }
    render() {
        return (
            <div>
                {this.getDetail()}
            </div>
        );
    }
}
export default Index
