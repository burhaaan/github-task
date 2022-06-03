import * as types from './repositoryTypes';
import GithubService from '../../../services/githubService';

export const getRepositories = (q, category, page) => async (dispatch) => {
  const result = await GithubService.getRepositories(q, category, page);
  dispatch({
    type: types.GET_REPOSITORIES,
    payload: { repositories: result.data.items, query: q, category },
  });
};

export const clearState = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_STATE });
};

export const persistQuery = (query) => async (dispatch) => {
  dispatch({ type: types.PERSIST_QUERY, payload: query });
};

export const persistCategory = (category) => async (dispatch) => {
  dispatch({ type: types.PERSIST_CATEGORY, payload: category });
};
