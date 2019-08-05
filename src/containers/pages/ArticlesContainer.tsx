import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {AppStateType} from 'store/root-reducer';
import {IFetchArticles} from 'ducks/app/types';
import {IPagination} from 'ts/interfaces/common';
import {IArticle} from 'ducks/articles/types';
import Articles from 'components/pages/articles/Articles';
import appActions from 'ducks/app/actions';
import articlesSelectors from 'ducks/articles/selectors';

interface IReduxProps {
  articles: IArticle[];
  pagination: IPagination;
}

interface IProps extends IReduxProps {
  fetchArticles: IFetchArticles;
}

function ArticlesContainer(props: IProps): React.ReactNode {
  const {articles, fetchArticles, pagination} = props;
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchArticles({
      offset: page,
      limit: 5
    });
  }, [fetchArticles, page]);

  return (
    <div>
      <button
        disabled={page === 1}
        onClick={() => setPage(currentPage => currentPage - 1)}
      >
        Previous page
      </button>
      <button
        disabled={page === pagination.pageCount}
        onClick={() => setPage(currentPage => currentPage + 1)}
      >
        Next page
      </button>
      <Articles articles={articles} pagination={pagination}/>
    </div>
  );
}

const mapStateToProps = (state: AppStateType): IReduxProps => ({
  articles: articlesSelectors.selectArticlesList(state),
  pagination: articlesSelectors.selectPagination(state)
});

const mapDispatchToProps = {
  fetchArticles: appActions.fetchArticles
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);
