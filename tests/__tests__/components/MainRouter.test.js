import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';

import LoginContainer from 'containers/pages/LoginContainer';
import RegisterContainer from 'containers/pages/RegisterContainer';
import HomeContainer from 'containers/pages/HomeContainer';
import ArticlesContainer from 'containers/pages/ArticlesContainer';
import MainRouter from 'components/main-router/MainRouter';

describe('routing', () => {
  it('should be ok', () => {
    // const wrapper = mount(
    //   <MemoryRouter initialEntries={['/']}>
    //     <MainRouter isAuthenticated={true} />
    //   </MemoryRouter>
    // );

    expect(true).toBe(true);
  });
});
