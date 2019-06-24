import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Articles from 'components/pages/articles/Articles';
import {appActions} from 'ducks/app';
import {articlesSelectors} from 'ducks/articles';

function ArticlesContainer(props) {
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

ArticlesContainer.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
  pagination: PropTypes.shape({
    offset: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    rowCount: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired
  }).isRequired
};

const mapStateToProps = (state) => ({
  articles: articlesSelectors.selectArticles(state),
  pagination: articlesSelectors.selectPagination(state)
});

const mapDispatchToProps = {
  fetchArticles: appActions.fetchArticles
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);
