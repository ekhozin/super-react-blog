import {createSelector} from 'reselect';

import {AppStateType} from 'store/root-reducer';
import {IPagination} from 'ts/interfaces/common';
import {
  IArticlesState,
  IArticle,
  IArticlesSliceState,
  IArticlesByIdState
} from './types';

function selectArticlesState(state: AppStateType): IArticlesState {
  return state.articles;
}

function selectArticles(state: AppStateType): IArticlesSliceState {
  return selectArticlesState(state).articles;
}

function selectArticlesById(state: AppStateType): IArticlesByIdState {
  return selectArticles(state).byId;
}

function selectArticlesIds(state: AppStateType): number[] {
  return selectArticles(state).ids;
}

function selectPagination(state: AppStateType): IPagination {
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
