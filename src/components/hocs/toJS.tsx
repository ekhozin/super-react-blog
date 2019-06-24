import React from 'react';
import Immutable from 'immutable';

const toJS = (WrappedComponent) => (wrappedComponentProps) => {
  const propsJs = Object.entries(wrappedComponentProps)
    .reduce((newProps, [wrappedPropKey, wrappedPropValue]) => {
      newProps[wrappedPropKey] = Immutable.Iterable.isIterable(wrappedPropValue) ?
        wrappedPropValue.toJS() : wrappedPropValue;

      return newProps;
    }, {});

  return <WrappedComponent {...propsJs}/>;
};

export default toJS;
