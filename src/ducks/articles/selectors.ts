import {createSelector} from 'reselect';

import {AppState} from 'store/root-reducer';
import {IPagination} from 'ts/interfaces/common';
import linksManager from 'helpers/linksManager';
import {
  IArticlesState,
  IArticle,
  IArticlesSliceState,
  IArticlesByIdState,
  TArticlePreview
} from './types';

function selectArticlesState(state: AppState): IArticlesState {
  return state.articles;
}

function selectArticles(state: AppState): IArticlesSliceState {
  return selectArticlesState(state).articles;
}

function selectArticle(state: AppState): IArticle | {} {
  return selectArticlesState(state).article;
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

const selectArticlesToList = createSelector(
  selectArticlesList,
  (articles: IArticle[]): TArticlePreview[] => {
    return articles.map((article: IArticle): TArticlePreview => {
      const {id, title, userId, content, imageUrl} = article;

      return {
        id,
        title,
        userId,
        content,
        imageUrl,
        link: linksManager.createArticleLink(id)
      };
    });
  }
);

export default {
  selectArticlesList,
  selectPagination,
  selectArticlesToList,
  selectArticle
};
