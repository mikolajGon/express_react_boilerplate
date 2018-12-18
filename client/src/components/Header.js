import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <React.Fragment>
          <Link to='/signout'>Signout</Link>
          <Link to='feature'>Feature</Link>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/signin'>Sign In</Link>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div>
        <Link to='/'>Redux Auth</Link>
        {this.renderLinks()}
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { authenticated: auth.authenticated }
}

export default connect(mapStateToProps)(Header);