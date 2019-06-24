import React from 'react';
import PropTypes from 'prop-types';
import {FORM_ERROR} from "final-form";
import {FormattedMessage, injectIntl} from 'react-intl';

import ROUTES from 'constants/routes';
import {required} from 'helpers/validator';
import Input from 'components/common/form-components/input/Input';
import Form from 'components/common/form-components/form/Form';
import Link from 'components/common/link/Link';

class Login extends React.PureComponent {
  getValidator = (name) => {
    const {formatMessage} = this.props.intl;

    const validatorRules = {
      username: required(formatMessage({id: 'errors.required'})),
      password: required(formatMessage({id: 'errors.required'}))
    };

    return validatorRules[name];
  };

  handleSubmit = (credentials) => {
    const {onLogin, intl: {formatMessage}} = this.props

    onLogin(credentials);
    // return new Promise((resolve) => {
    //   onLogin(credentials, resolve);
    // }).then((res) => {
    //   if (res.errorCode) {
    //     return {
    //       [FORM_ERROR]: 'errors.incorrectUsernamePassword'
    //     };
    //   }

    //   return {};
    // });
  };

  renderForm = (formProps) => {
    const {submitError, dirtySinceLastSubmit} = formProps;
    const {intl: {formatMessage, locale}, error} = this.props;
    const nameSubmitError = error && error.errorCode;

    return (
      <React.Fragment>
        <h1><FormattedMessage id='auth.loginTitle'/></h1>
        <div className='formFieldWrap'>
          <Input
            submitError={nameSubmitError}
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
          <Link to={ROUTES.REGISTER}>
            <FormattedMessage id='auth.gotoRegister'/>
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

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  error: PropTypes.object,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired
  }).isRequired
};

export default injectIntl(Login);
