import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {AppState} from 'store/root-reducer';
import {IFetchArticles} from 'ducks/app/types';
import {IPagination} from 'ts/interfaces/common';
import {IArticle} from 'ducks/articles/types';
import Articles from 'components/pages/articles/Articles';
import appActions from 'ducks/app/actions';
import articlesSelectors from 'ducks/articles/selectors';

interface IStateToProps {
  articles: IArticle[];
  pagination: IPagination;
}

interface IDispatchToProps {
  fetchArticles: IFetchArticles;
}

type TReduxProps = IStateToProps & IDispatchToProps;

function ArticlesContainer(props: TReduxProps): React.ReactElement<TReduxProps> {
  const {articles, fetchArticles, pagination} = props;

  const [pageOffset, handlePageChange] = useState(pagination.offset);

  useEffect((): void => {
    fetchArticles({
      offset: pageOffset,
      limit: 5
    });
  }, [fetchArticles, pageOffset]);

  return <Articles articles={articles} pagination={pagination} onPageChange={handlePageChange}/>;
}

const mapStateToProps = (state: AppState): IStateToProps => ({
  articles: articlesSelectors.selectArticlesList(state),
  pagination: articlesSelectors.selectPagination(state)
});

const mapDispatchToProps: IDispatchToProps = {
  fetchArticles: appActions.fetchArticles
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);
