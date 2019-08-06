import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Pagination.scss';

/* eslint-disable */
function Pagination(props) {
  const [currentPage, setPage] = useState(1);

  const renderItems = () => {
    const items = [];
    let maxDisplayItems = 5
    let maxPages = 10;

    const offset = Math.floor(maxDisplayItems / 2);

    // TODO: refactor
    if (currentPage === 1) { // first page is active
      for (let i = 1; i <= maxDisplayItems; i++) {
        items.push(i);
      }
    } else if (currentPage === maxPages) { // last page is active
      for (let i = maxPages - maxDisplayItems + 1; i <= maxPages; i++) {
        items.push(i);
      }
    } else if (maxPages <= maxDisplayItems) {
      for (let i = 1; i <= maxDisplayItems; i++) {
        items.push(i);
      }
    } else if (currentPage <= offset + 1) { // from start no more than offset
      for (let i = 1; i <= maxDisplayItems; i++) {
        items.push(i);
      }
    } else if (currentPage < maxPages && currentPage >= maxPages - offset) { // from end no more than offset
      for (let i = maxPages - maxDisplayItems + 1; i <= maxPages; i++) {
        items.push(i);
      }
    } else {
      for (let i = currentPage - offset; i < currentPage; i++) { // right items
        items.push(i);
      }
      for (let i = currentPage; i <= currentPage + offset; i++) { // current + left items
        items.push(i);
      }
    }

    return (
      <React.Fragment>
        {items.map(item => {
          if (item === currentPage) {
            return <div key={item} className={`${styles.item} ${styles.active}`}>{item}</div>
          }

          return <div key={item} className={styles.item} onClick={() => setPage(item)}>{item}</div>;
        })}
      </React.Fragment>
    );
  };

  const {className} = props;
  const cssClass = classNames(styles.pagination, className);

  return (
    <div className={cssClass}>
      {renderItems()}
    </div>
  );
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
