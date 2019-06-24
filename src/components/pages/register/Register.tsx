import React from 'react';
import PropTypes from 'prop-types';
import {FORM_ERROR} from "final-form";
import {FormattedMessage, injectIntl} from 'react-intl';

import ROUTES from 'constants/routes';
import {required} from 'helpers/validator';
import Input from 'components/common/form-components/input/Input';
import Form from 'components/common/form-components/form/Form';
import Link from 'components/common/link/Link';

class Register extends React.PureComponent {
  getValidator = (name) => {
    const {formatMessage} = this.props.intl;

    const validatorRules = {
      username: required(formatMessage({id: 'errors.required'})),
      password: required(formatMessage({id: 'errors.required'}))
    };

    return validatorRules[name];
  };

  handleSubmit = (credentials) => {
    const {onRegister, intl: {formatMessage}} = this.props

    return new Promise((resolve) => {
      onRegister(credentials, resolve);
    }).then((res) => {
      if (res.errorCode) {
        return {
          [FORM_ERROR]: 'errors.usernameAlreadyUsed'
        };
      }

      return {};
    });
  };

  renderForm = (formProps) => {
    const {submitError, dirtySinceLastSubmit} = formProps;
    const {intl: {formatMessage, locale}} = this.props;

    return (
      <React.Fragment>
        <h1><FormattedMessage id='auth.registerTitle'/></h1>
        <div className='formFieldWrap'>
          <Input
            key={`username-${locale}`}
            id='login-username'
            labelText={formatMessage({id: 'auth.username'})}
            name='username'
            placeholder={formatMessage({id: 'auth.usernamePlaceholder'})}
            validate={this.getValidator('username')}
          />
        </div>
        <div className='formFieldWrap'>
          <Input
            key={`password-${locale}`}
            id='login-password'
            labelText={formatMessage({id: 'auth.password'})}
            name='password'
            type='password'
            placeholder={formatMessage({id: 'auth.passwordPlaceholder'})}
            validate={this.getValidator('password')}
          />
        </div>
        {submitError && !dirtySinceLastSubmit && (
          <div className='formFieldWrap errorText'>
            <FormattedMessage id={submitError}/>
          </div>
        )}
        <div>
          <button>
            <FormattedMessage id='auth.signIn'/>
          </button>
        </div>
        <div>
          <br/>
          <Link to={ROUTES.LOGIN}>
            <FormattedMessage id='auth.gotoLogin'/>
          </Link>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        {this.renderForm}
      </Form>
    );
  }
}

Register.propTypes = {
  onRegister: PropTypes.func.isRequired,
  error: PropTypes.object,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired
  }).isRequired
};

export default injectIntl(Register);
