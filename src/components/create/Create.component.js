import React from 'react';


class Create extends React.Component{

    constructor(props){
        super(props);
        this.state={
            addEmp:null
        }
    }

    onSubmitClick=()=>{
        // fetch('	http://dummy.restapiexample.com/api/v1/create')
        // .then((newData)=>newData.json())
        // .then((newjson)=>{
        //     this.setState({addEmp:newjson})
        // })
        
    }
    render(){
        return(
            <div style={{margin:10}}>
                <h4> Add New Data </h4>
                <form>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text"className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Address:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Phone No:</label>
                        <input text="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save" className="btn btn-primary"/>
                    </div>
                </form>
                {/* <h4>Welcome To Create Component</h4> */}
            </div>
        );
    }
}
export default Create