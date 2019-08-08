import React from 'react';
import classNames from 'classnames';

import styles from './Pagination.scss';

const defaultProps = {
  isCurrent: false,
  isEllipsis: false,
  onClick: (page: number): number => page
};

interface IProps {
  page: number;
  isCurrent?: boolean;
  isEllipsis?: boolean;
  onClick?(page: number): number;
}

const PaginationItem: React.FC<IProps> = (props) => {
  const {children, onClick, isCurrent, isEllipsis, page} = props;
  const title = `${page}`;

  const className = classNames({
    [styles.item]: !isEllipsis,
    [styles.active]: isCurrent,
    [styles.ellipsis]: isEllipsis
  });

  const handleClick = (page: number) => (): void => {
    if (typeof onClick === 'function') {
      onClick(page);
    }
  };

  return <li title={title} className={className} onClick={handleClick(page)}>{children}</li>;
};

PaginationItem.defaultProps = defaultProps;

export default PaginationItem;
