import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/feature');
    })
  }

  render() {
    //Provided by React-form (sect. 6, 125, Advanced React+Redux)
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.onSubmit) }>
        <fieldset>
          <label htmlFor='email'>
            Email
          </label>
          <Field
            name='email'
            type='text'
            component='input'
            autoComplete='none'
          />
        </fieldset>
        <fieldset>
          <label htmlFor='password'>
            Password
          </label>
          <Field
            name='password'
            type='password'
            component='input'
            autoComplete='none'
          />
        </fieldset>
        <div>
          {this.props.errorMessage}
        </div>
        <button type='submit'>Sign Up!</button>
      </form>
    )
  }
}

function mapStateToProps({ auth }) {
  return { errorMessage: auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(Signup);
