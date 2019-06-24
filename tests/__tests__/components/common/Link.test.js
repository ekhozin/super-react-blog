import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter, Link} from 'react-router-dom';

import CustomLink from 'components/common/link/Link';

describe('<Link/> react component', () => {
  const wrapper = mount(
    <MemoryRouter><CustomLink to='/' className='my-link'>Home page</CustomLink></MemoryRouter>
  );

  it('contains "Home page" text', () => {
    expect(wrapper.find(Link)).toHaveText('Home page');
  });

  it('has "<a class="" href="/">Home page</a>" returned html', () => {
    expect(wrapper.find(Link)).toHaveHTML('<a class="my-link" href="/">Home page</a>');
  });
});
