import React, {Component} from 'react';

class Post extends Component {
  render(){
    return (
      <div className="card mt-2">
        <div className="card-body media">
          <img src="https://randomuser.me/api/portraits/men/41.jpg" className="mr-3" alt="..." style={{ borderRadius: '50%', width: '40px'}} />
          <div className="media-body">
            <div className="mt-0"><small>Guest <span className="text-muted">@guest</span></small></div>
            <div className="lead">{ this.props.body }</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
