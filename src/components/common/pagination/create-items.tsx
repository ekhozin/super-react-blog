
// TODO: constraints of 'type' - only from enum 'itemTypes'
interface IItem {
  type: string;
  page: number;
}

interface ICreateItems {
  (currentPage: number, totalPages: number, maxDisplayItems: number, withBorderItems?: boolean): IItem[];
}

export const itemTypes = {
  current: 'current',
  regular: 'regular',
  prev: 'prev',
  next: 'next',
  ellipsis: 'ellipsis'
};

const isCurrentType = (current: number) => (index: number): string => {
  return current === index ? itemTypes.current : itemTypes.regular;
};

/**
 * Creates array of items. Each Item is an object with props of pagination item.
 * @param {number} currentPage Current items number.
 * @param {number} totalPages Total amount of items.
 * @param {number} maxDisplayItems Maximum amount of displayed items. Border items are not taked in account.
 * @param {boolean} withBorderItems Whether generate border items (first page, last page) or not.
 * @return {Array<IItem>} Array of objects. Each object describes pagination item.
 */
const createItems: ICreateItems = (currentPage, totalPages, maxDisplayItems, withBorderItems = true) => {
  const items = [];
  const offset = Math.floor(maxDisplayItems / 2);
  const getCurrentType = isCurrentType(currentPage);

  // add 'prev'-item
  if (currentPage !== 1) {
    items.push({
      type: itemTypes.prev,
      page: currentPage - 1
    });
  }

  // add regular items
  if (totalPages <= maxDisplayItems) { // items amount is less or equal to max display items
    for (let i = 1; i <= totalPages; i++) {
      items.push({
        type: getCurrentType(i),
        page: i
      });
    }
  } else { // items amount is greater than max display items
    switch (true) {
      case currentPage === totalPages: // last page is active
        if (withBorderItems) {
          items.push({
            type: itemTypes.regular,
            page: 1
          });
          items.push({
            type: itemTypes.ellipsis,
            page: currentPage - offset
          });
        }

        const delta1 = Math.min(maxDisplayItems, totalPages);
        for (let i = totalPages - delta1 + 1; i <= totalPages; i++) {
          items.push({
            type: getCurrentType(i),
            page: i
          });
        }
        break;
      case currentPage <= offset + 1: // from start no more than offset
        for (let i = 1; i <= maxDisplayItems; i++) {
          items.push({
            type: getCurrentType(i),
            page: i
          });
        }
        if (withBorderItems) {
          items.push({
            type: itemTypes.ellipsis,
            page: currentPage + offset
          });
          items.push({
            type: itemTypes.regular,
            page: totalPages
          });
        }
        break;
      case currentPage < totalPages && currentPage >= totalPages - offset: // from end no more than offset
        if (withBorderItems) {
          items.push({
            type: itemTypes.regular,
            page: 1
          });
          items.push({
            type: itemTypes.ellipsis,
            page: currentPage - offset
          });
        }
        for (let i = totalPages - maxDisplayItems + 1; i <= totalPages; i++) {
          items.push({
            type: getCurrentType(i),
            page: i
          });
        }
        break;
      default: // greater than offset, less than max pages
        if (withBorderItems) {
          items.push({
            type: itemTypes.regular,
            page: 1
          });
          items.push({
            type: itemTypes.ellipsis,
            page: currentPage - offset
          });
        }

        // fix for displaying correct amount if items when "maxDisplayItems" is even
        const delta2 = maxDisplayItems % 2 ? 0 : 1;

        for (let i = currentPage - offset + delta2; i < currentPage; i++) { // left items
          items.push({
            type: getCurrentType(i),
            page: i
          });
        }
        for (let i = currentPage; i <= currentPage + offset; i++) { // current + right items
          items.push({
            type: getCurrentType(i),
            page: i
          });
        }

        if (withBorderItems) {
          items.push({
            type: itemTypes.ellipsis,
            page: currentPage + offset
          });
          items.push({
            type: itemTypes.regular,
            page: totalPages
          });
        }
    }
  }

  // add 'next'-item
  if (currentPage !== totalPages) {
    items.push({
      type: itemTypes.next,
      page: currentPage + 1
    });
  }

  return items;
};

export default createItems;
