import React from 'react';

import {TArticlePreview} from 'ducks/articles/types';
import Link from 'components/common/link/Link';

type TProps = TArticlePreview;

function ArticlePreview(props: TProps): React.ReactElement<TProps> {
  const {title, content, imageUrl, link} = props;

  return (
    <article>
      {title && <h3>{title}</h3>}
      <img src={imageUrl} alt={title} />
      {content && <p>{content}</p>}
      <div>
        <Link to={link}>read</Link>
      </div>
    </article>
  );
}

export default ArticlePreview;
