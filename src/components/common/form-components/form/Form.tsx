import React from 'react';
import PropTypes from 'prop-types';
import {Form as FinalForm} from 'react-final-form';

class Form extends React.Component {
  render() {
    const {
      onSubmit, children, validate, validateOnBlur
    } = this.props;

    return (
      <FinalForm
        onSubmit={onSubmit}
        validateOnBlur={validateOnBlur}
        validate={validate}
        render={(formProps) => {
          return (
            <form onSubmit={formProps.handleSubmit}>
              {children(formProps)}
            </form>
          );
        }}
      />
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  validate: PropTypes.func,
  children: PropTypes.func,
  validateOnBlur: PropTypes.bool
}

Form.defaultProps = {
  validate: () => {},
  children: () => {},
  validateOnBlur: false
}

export default Form;
