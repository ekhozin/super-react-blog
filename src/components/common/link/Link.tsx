import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

function CustomLink(props) {
  const {className, children, ...restProps} = props;
  const cssClass = classNames(className);

  return (
    <Link className={cssClass} {...restProps}>
      {children}
    </Link>
  );
}

CustomLink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  className: PropTypes.string,
  children: PropTypes.node
};

export default CustomLink;
