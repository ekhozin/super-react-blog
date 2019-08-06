import {createSelector} from 'reselect';

import {AppState} from 'store/root-reducer';
import {IPagination} from 'ts/interfaces/common';
import {
  IArticlesState,
  IArticle,
  IArticlesSliceState,
  IArticlesByIdState
} from './types';

function selectArticlesState(state: AppState): IArticlesState {
  return state.articles;
}

function selectArticles(state: AppState): IArticlesSliceState {
  return selectArticlesState(state).articles;
}

function selectArticlesById(state: AppState): IArticlesByIdState {
  return selectArticles(state).byId;
}

function selectArticlesIds(state: AppState): number[] {
  return selectArticles(state).ids;
}

function selectPagination(state: AppState): IPagination {
  return selectArticlesState(state).pagination;
}

const selectArticlesList = createSelector(
  [selectArticlesById, selectArticlesIds],
  (byId: IArticlesByIdState, ids: number[]): IArticle[] => {
    return ids.map((id: number): IArticle => byId[id]);
  }
);

export default {
  selectArticlesList,
  selectPagination
};
