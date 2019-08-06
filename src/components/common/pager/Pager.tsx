import React from 'react';

export interface IOnChange {
  (offset: number): any;
}

interface IProps {
  offset: number;
  pageCount: number;
  onChange: IOnChange;
}

function Pager(props: IProps): React.ReactElement<IProps> {
  const {offset, pageCount, onChange} = props;

  return (
    <div>
      <button
        disabled={offset === 1}
        onClick={(): IOnChange => onChange(offset - 1)}
      >
        Previous page
      </button>
      <button
        disabled={offset === pageCount}
        onClick={(): IOnChange => onChange(offset + 1)}
      >
        Next page
      </button>
    </div>
  );
}

export default Pager;
