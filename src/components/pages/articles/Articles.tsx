import React from 'react';
import PropTypes from 'prop-types';

import Pagination from 'components/common/pagination/Pagination';
import ArticlePreview from 'components/common/article-preview/ArticlePreview';

function Articles(props) {
  const {articles} = props;

  return (
    <div>
      <div>
        {articles.map((article) => <ArticlePreview key={article.id} {...article}/>)}
      </div>
      <div>
        <Pagination currentPage={1}/>
      </div>
    </div>
  );
}

Articles.propTypes = {
  articles: PropTypes.array,
  pagination: PropTypes.shape({
    offset: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    rowCount: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired
  }).isRequired
};


Articles.defaultProps = {
  articles: []
};

export default Articles;
