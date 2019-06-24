import React from 'react';
import PropTypes from 'prop-types';

import Link from 'components/common/link/Link';

function ArticlePreview(props) {
  const {title, content, imageUrl} = props;

  return (
    <article>
      {title && <h3>{title}</h3>}
      <img src={imageUrl} alt={title} />
      {content && <p>{content}</p>}
      <div>
        <Link to=''>read</Link>
      </div>
    </article>
  );
}

ArticlePreview.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default ArticlePreview;
