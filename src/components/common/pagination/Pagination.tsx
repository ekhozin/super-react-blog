import React from 'react';
import classNames from 'classnames';

import PaginationItem from './PaginationItem';
import createItems, {itemTypes, IItem} from './create-items';
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

  const itemsPropsMap = {
    [itemTypes.current]: (itemProps: IItem): React.ReactNode => (
      <PaginationItem {...itemProps} key={`${itemProps.type}-${itemProps.page}`} isCurrent={true}>
        {itemProps.page}
      </PaginationItem>
    ),
    [itemTypes.regular]: (itemProps: any): React.ReactNode => (
      <PaginationItem {...itemProps} key={`${itemProps.type}-${itemProps.page}`} onClick={onChange}>
        {itemProps.page}
      </PaginationItem>
    ),
    [itemTypes.prev]: (itemProps: any): React.ReactNode => (
      <PaginationItem {...itemProps} key={`${itemProps.type}-${itemProps.page}`} onClick={onChange}>
        {'<'}
      </PaginationItem>
    ),
    [itemTypes.next]: (itemProps: any): React.ReactNode => (
      <PaginationItem {...itemProps} key={`${itemProps.type}-${itemProps.page}`} onClick={onChange}>
        {'>'}
      </PaginationItem>
    ),
    [itemTypes.ellipsis]: (itemProps: any): React.ReactNode => (
      <PaginationItem {...itemProps} key={`${itemProps.type}-${itemProps.page}`} isEllipsis={true}>
        {'...'}
      </PaginationItem>
    )
  };

  const renderItems = (): React.ReactNode => {
    const {maxDisplayItems, totalPages} = props;
    const items = createItems(currentPage, totalPages, maxDisplayItems, withBorderItems);

    return (
      <React.Fragment>
        {items.map((item): any => {
          const renderComponent = itemsPropsMap[item.type];
          return renderComponent(item);
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
