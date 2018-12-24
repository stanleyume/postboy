import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Layout extends Component {
  render(){
    return (
      <div className="container-fluid">
        <div className="navbar">
          <h2 className="brand">PostMan</h2>
          <div className="pull-right">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
        { this.props.children }
      </div>
    )
  }
}

export default Layout;
