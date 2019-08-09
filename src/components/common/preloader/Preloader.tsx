import React from 'react';
import classNames from 'classnames';

import styles from './Preloader.scss';

export interface IProps {
  color?: string;
  className?: string;
}

function Preloader(props: IProps): React.ReactElement<IProps> {
  const {color, className} = props;
  const cssClass = classNames(styles.roller, className);

  return (
    <div className={cssClass} style={{color}}>
      <div/><div/><div/><div/><div/><div/><div/><div/>
    </div>
  );
}

Preloader.defaultProps = {
  color: '#000'
};

export default Preloader;
