import React, { Component } from 'react';
import Layout from './Layout';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Actions
import {newPost} from '../actions/index';

class Home extends Component {
  constructor(props){
    super(props);

  }
  handleSubmit(e){
    e.preventDefault();
    this.props.newPost(this.refs.post_box.value);
    this.refs.post_box.value = '';
  }
  render(){
    // console.log(this.props.posts);
    return (
      <div>
        <Layout>
          <div className="row justify-content-center">
            <div className="col-md-6 col-10">

              <form className="" id="post_form" onSubmit={ this.handleSubmit.bind(this) }>
                <div className="form-group">
                  <textarea ref="post_box" placeholder="What's up?" rows="3" className="form-control" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
              </form>



              {this.props.posts.map((post)=>{
                return post.title.replace(/(?:\r\n|\r|\n)/g, '<br/>');
              })

              }

            </div>
          </div>

        </Layout>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({newPost}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
