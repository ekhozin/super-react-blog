import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Select.scss';

function SelectBase(props) {
  const {
    labelText, type, placeholder, className,
    id, errorMessage, onBlur, onChange, onFocus,
    name, value, options
  } = props;

  const cssClass = classNames(styles.Input, className, {
    [styles.error]: errorMessage
  });

  return (
    <div className={cssClass}>
      {labelText && (
        <label htmlFor={id} className={styles.label}>
          {labelText}
        </label>
      )}
      <select
        className={styles.field}
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      >
        {options.map(({value, label}) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
      {errorMessage && (
        <div className={styles.errorMessage}>
          {errorMessage}
        </div>
      )}
    </div>
  );
}

SelectBase.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password']),
  value: PropTypes.string,
  labelText: PropTypes.node,
  errorMessage: PropTypes.node,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  }))
};

SelectBase.defaultProps = {
  labelText: null,
  errorMessage: null,
  value: '',
  placeholder: '',
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  options: []
};

export default SelectBase;
