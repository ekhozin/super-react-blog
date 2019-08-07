import React from 'react';
import classNames from 'classnames';

import createItems, {itemTypes} from './create-items';
import styles from './Pagination.scss';

interface IProps {
  className?: string;
  currentPage: number;
  totalPages: number;
  maxDisplayItems: number;
  withBorderItems?: boolean;
  onChange: (page: number) => any;
}

const Pagination: React.FC<IProps> = (props) => {
  const {className, onChange, currentPage, withBorderItems} = props;
  const cssClass = classNames(styles.pagination, className);

  const handleClick = (page: number) => (): void => {
    onChange(page);
  };

  const renderItems = (): React.ReactNode => {
    const {maxDisplayItems, totalPages} = props;
    const items = createItems(currentPage, totalPages, maxDisplayItems, withBorderItems);

    return (
      <React.Fragment>
        {items.map((item): any => {
          const {page, type} = item;
          const key = `${type}-${page}`;
          const title = `${page}`;

          if (type === itemTypes.ellipsis) {
            return <li key={key} className={styles.ellipsis}>{'...'}</li>;
          }

          if (type === itemTypes.prev) {
            return <li title={title} key={key} className={styles.item} onClick={handleClick(page)}>{'<'}</li>;
          }

          if (type === itemTypes.next) {
            return <li title={title} key={key} className={styles.item} onClick={handleClick(page)}>{'>'}</li>;
          }

          if (type === itemTypes.current) {
            return <li title={title} key={key} className={`${styles.item} ${styles.active}`}>{page}</li>;
          }

          return <li title={title} key={key} className={styles.item} onClick={handleClick(page)}>{page}</li>;
        })}
      </React.Fragment>
    );
  };

  return (
    <ul className={cssClass}>
      {renderItems()}
    </ul>
  );
};

Pagination.defaultProps = {
  currentPage: 1,
  totalPages: 1,
  maxDisplayItems: 5
};

export default Pagination;
