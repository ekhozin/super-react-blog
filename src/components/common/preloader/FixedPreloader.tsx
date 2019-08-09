import React from 'react';

import Preloader, {IProps} from './Preloader';
import styles from './Preloader.scss';

function FixedPreloader(props: IProps): React.ReactElement<IProps> {
  return <Preloader {...props} className={styles.fixed}/>;
}

export default FixedPreloader;
