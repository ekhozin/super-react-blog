import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'react-final-form';

import InputBase from './InputBase';

class Input extends React.PureComponent {
  renderError = (meta) => {
    const {touched, error, dirtySinceLastSubmit, submitError} = meta;
    const {submitError: subError} = this.props;

    switch (true) {
      case meta.touched && !!meta.error:
        return meta.error;
      case meta.touched && !meta.dirtySinceLastSubmit && !!subError:
        return subError;
      default:
        //
    }
  };

  renderField = (fieldRenderProps) => {
    const {input, meta} = fieldRenderProps;

    const {
      onChange, onBlur, onFocus, id,
      placeholder, labelText, className, type
    } = this.props;

    return (
      <InputBase
        type={type}
        className={className}
        labelText={labelText}
        placeholder={placeholder}
        id={id}
        onChange={(e) => {
          input.onChange(e);
          onChange(e);
        }}
        onBlur={(e) => {
          input.onBlur(e);
          onBlur(e);
        }}
        onFocus={(e) => {
          input.onFocus(e);
          onFocus(e);
        }}
        name={input.name}
        value={input.value}
        errorMessage={this.renderError(meta)}
      />
    );
  };

  render() {
    const {name, validate, validateFields} = this.props;

    return (
      <Field name={name} validate={validate} validateFields={validateFields}>
        {this.renderField}
      </Field>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  validateFields: PropTypes.array,
  type: PropTypes.oneOf(['text', 'password']),
  labelText: PropTypes.node,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  submitError: PropTypes.node,
  validate: PropTypes.func
};

Input.defaultProps = {
  type: 'text',
  labelText: null,
  submitError: null,
  placeholder: '',
  validate: () => {},
  validateFields: [],
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {}
};

export default Input;
