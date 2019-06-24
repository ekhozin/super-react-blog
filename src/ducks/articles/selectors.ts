import {createSelector} from 'reselect';

function selectArticlesState(state) {
  return state.get('articles');
}

function selectArticlesImmutable(state) {
  return selectArticlesState(state).get('articles');
}

function selectArticlesByIdImmutable(state) {
  return selectArticlesImmutable(state).get('byId');
}

function selectArticlesIdsImmutable(state) {
  return selectArticlesImmutable(state).get('ids');
}

function selectPaginationImmutable(state) {
  return selectArticlesState(state).get('pagination');
}

const selectArticles = createSelector(
  [selectArticlesByIdImmutable, selectArticlesIdsImmutable],
  (byId, ids) => {
    return ids.map((id) => byId.get(`${id}`)).toJS();
  }
);

const selectPagination = createSelector(
  selectPaginationImmutable,
  (pagination) => pagination.toJS()
);

export default {
  selectArticles,
  selectPagination
};
