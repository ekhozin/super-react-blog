import React from 'react';

import Link from 'components/common/link/Link';

interface IProps {
  title?: string;
  content?: string;
  imageUrl?: string;
}

function ArticlePreview(props: IProps): React.ReactElement<IProps> {
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

export default ArticlePreview;
