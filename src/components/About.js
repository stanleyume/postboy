import React, { Component } from 'react';
import Layout from './Layout';

class About extends Component {
  render(){
    return (
      <Layout>
        <div className="card">
          <div className="card-body">
            <div className="card-title">About</div>
            <div className="card-text">
              PostBoy is a microblogging platform for everyone.
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default About;
