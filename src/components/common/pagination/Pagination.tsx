import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Pagination.scss';

/* eslint-disable */
class Pagination extends React.PureComponent {
  renderItems = () => {
    const items = [];
    const {currentPage, maxDisplayItems} = this.props;

    const offset = Math.floor(maxDisplayItems / 2);
    console.log(offset, currentPage);
    // left side
    // <= 3
    if (currentPage === 1) {
      for (let i = 1; i <= maxDisplayItems; i++) {
        items.push(i);
      }
    // } else if (currentPage <= ) {


    } else { // > 3
      for (let i = currentPage - offset; i < currentPage; i++) {
        items.push(i);
      }
    }


    console.log(items);

    return (
      <React.Fragment>
        {/* <div className={styles.item}>{'<'}</div> */}
        {/* <div className={styles.item}>1</div>
        <div className={styles.item}>2</div>
        <div className={styles.item}>...</div>
        <div className={styles.item}>9</div>
        <div className={`${styles.item} ${styles.active}`}>10</div>
        <div className={styles.item}>11</div>
        <div className={styles.item}>...</div>
        <div className={styles.item}>20</div>
        <div className={styles.item}>21</div> */}
        {/* <div className={styles.item}>{'>'}</div> */}
      </React.Fragment>
    );
  };

  render() {
    const {className} = this.props;
    const cssClass = classNames(styles.pagination, className);

    return (
      <div className={cssClass}>
        {this.renderItems()}
      </div>
    );
  }
}

Pagination.propTypes = {
  className: PropTypes.string,
  maxDisplayItems: PropTypes.number,
  currentPage: PropTypes.number,
  maxPages: PropTypes.number
};

Pagination.defaultProps = {
  maxDisplayItems: 7
};

export default Pagination;
