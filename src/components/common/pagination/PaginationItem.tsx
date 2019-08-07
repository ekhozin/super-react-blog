import React from 'react';
import classNames from 'classnames';

import styles from './Pagination.scss';

const defaultProps = {
  isCurrent: false,
  isEllipsis: false,
  onClick: (page: number): number => page
};

type TProps = {
  page: number;
} & typeof defaultProps;

const PaginationItem: React.FC<TProps> = (props) => {
  const {children, onClick, isCurrent, isEllipsis, page} = props;
  const title = `${page}`;

  const className = classNames({
    [styles.item]: !isEllipsis,
    [styles.active]: isCurrent,
    [styles.ellipsis]: isEllipsis
  });

  const handleClick = (page: number) => (): void => {
    onClick(page);
  };

  return <li title={title} className={className} onClick={handleClick(page)}>{children}</li>;
};

PaginationItem.defaultProps = defaultProps;

export default PaginationItem;
