import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import getByPath from 'lodash.get';

import appActions from 'ducks/app/actions';
import articlesActions from 'ducks/articles/actions';
import articlesSelectors from 'ducks/articles/selectors';

import Article from 'components/pages/article/Article';

const ArticleContainer = (props): React.ReactElement<any> => {
  const {article, fetchArticle, flushArticle, match} = props;
  const id: string = getByPath(match, 'params.id');

  useEffect((): void => {
    fetchArticle(id);

    return () => {
      flushArticle();
    };
  }, [fetchArticle, flushArticle, id]);

  return <Article/>;
};

const mapStateToProps = (state) => ({
  article: articlesSelectors.selectArticle(state)
});

const mapDispatchToProps = {
  fetchArticle: appActions.fetchArticle,
  flushArticle: articlesActions.flushArticleState
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);
