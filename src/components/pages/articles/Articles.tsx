import React from 'react';

import {IPagination} from 'ts/interfaces/common';
import {TArticlePreview} from 'ducks/articles/types';
import {IOnChange} from 'components/common/pagination/Pagination';
import Pagination from 'components/common/pagination/Pagination';
import ArticlePreview from 'components/common/article-preview/ArticlePreview';

interface IProps {
  articles: TArticlePreview[];
  pagination: IPagination;
  onPageChange: IOnChange;
}

function Articles(props: IProps): React.ReactElement<IProps> {
  const {articles, pagination, onPageChange} = props;
  const {offset, pageCount} = pagination;

  return (
    <div>
      <div>
        <Pagination currentPage={offset} totalPages={pageCount} maxDisplayItems={5} onChange={onPageChange}/>
      </div>
      <div>
        {articles.map((article): React.ReactNode => <ArticlePreview key={article.id} {...article}/>)}
      </div>
      <div>
        <Pagination currentPage={offset} totalPages={pageCount} maxDisplayItems={5} onChange={onPageChange}/>
      </div>
    </div>
  );
}

Articles.defaultProps = {
  articles: []
};

export default Articles;
