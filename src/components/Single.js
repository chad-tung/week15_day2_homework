import React from 'react';

class Single extends React.Component {
  render() {
    return (
      <div className="single">
        <React.Fragment>{this.props.position}. </React.Fragment>
        {this.props.title}
      </div>
    )

  }
}

export default Single;
