import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Create from './components/create/Create.component';
import Edit from './components/edit/Edit.component';
import Index from './components/index/Index.component';


class App extends React.Component {

  
  render() {
    return (

      <BrowserRouter>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <Link to={'/'} className="navbar-brand">Crud Opration</Link> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <uL className="navbar-nav mr-auto">
                {/* <li className="nav-item">
                  <Link Link to='/' className="nav-link">Home</Link>
                </li> */}
                <li className="nav-item">
                  <Link Link to='/create' className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link Link to='/edit' className="nav-link">Edit</Link>
                </li>
                <li className="nav-item">
                  <Link Link to='/index' className="nav-link">Index</Link>
                </li>
              </uL>
            </div>
          </nav><br />

         

          <Switch>
            <Route exact path='/create' component={Create} />
            <Route exact path='/edit' component={Edit} />
            <Route exact path='/index' component={Index} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
