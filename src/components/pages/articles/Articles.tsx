import React from 'react';

import {IPagination} from 'ts/interfaces/common';
import {IArticle} from 'ducks/articles/types';
import Pager, {IOnChange} from 'components/common/pager/Pager';
import Pagination from 'components/common/pagination/Pagination';
import ArticlePreview from 'components/common/article-preview/ArticlePreview';

interface IProps {
  articles: IArticle[];
  pagination: IPagination;
  onPageChange: IOnChange;
}

function Articles(props: IProps): React.ReactElement<IProps> {
  const {articles, pagination, onPageChange} = props;
  const {offset, pageCount} = pagination;

  return (
    <div>
      <Pager offset={offset} pageCount={pageCount} onChange={onPageChange}/>
      <div>
        {articles.map((article): React.ReactNode => <ArticlePreview key={article.id} {...article}/>)}
      </div>
      <div>
        <Pagination currentPage={1}/>
      </div>
    </div>
  );
}

Articles.defaultProps = {
  articles: []
};

export default Articles;
