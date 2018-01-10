import React from 'react';

class Single extends React.Component {
  render() {
    return (
      <React.Fragment>
        <img src={this.props.img} alt={this.props.img}></img>
        <React.Fragment>{this.props.position}. </React.Fragment>
        {this.props.title}
      </React.Fragment>
    )

  }
}

export default Single;
