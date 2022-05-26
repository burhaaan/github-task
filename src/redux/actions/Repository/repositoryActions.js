import * as types from './repositoryTypes';
import GithubService from '../../../services/githubService';

export const getRepositories = (q, category) => async (dispatch) => {
  const result = await GithubService.getRepositories(q, category);
  dispatch({ type: types.GET_REPOSITORIES, payload: result.data.items });
};
