import {createSelector} from 'reselect';

function selectArticlesState(state) {
  return state.articles;
}

function selectArticles(state) {
  return selectArticlesState(state).articles;
}

function selectArticlesById(state) {
  return selectArticles(state).byId;
}

function selectArticlesIds(state) {
  return selectArticles(state).ids;
}

function selectPagination(state) {
  return selectArticlesState(state).pagination;
}

const selectArticlesList = createSelector(
  [selectArticlesById, selectArticlesIds],
  (byId, ids) => {
    return ids.map((id) => byId[id]);
  }
);

export default {
  selectArticlesList,
  selectPagination
};
