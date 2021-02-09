import React from 'react';


class Edit extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name:'',
            salary:'',
            age:''
        }
    }
    onIdChange = (e) => {
        this.setState({ id: e.target.value })
    }

    render() {
        //  alert(JSON.stringify(this.props.location.state.id))
        return (
            <div style={{ margin: 10 }}>
                {/* {this.props.history.location.state} */}
                <h4> Add New Data </h4>
                <form>
                    <div className="form-group">
                        <label>Employee Id:</label>
                        <input type="text" value={this.props.location.state.id} onChange={this.onIdChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" value={this.props.location.state.employee_name} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Salary:</label>
                        <input text="text" value={this.props.location.state.employee_salary} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Age:</label>
                        <input text="text" value={this.props.location.state.employee_age} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update" className="btn btn-primary" />
                    </div>
                </form>
                {/* <h4>Welcome To Create Component</h4> */}
            </div>
        )
    }
}
export default Edit