import { GET_REPOSITORIES } from '../actions/Repository/repositoryTypes';

const init = {
  data: [],
};

export default function repositoryReducer(state = init, action) {
  switch (action.type) {
    case GET_REPOSITORIES: {
      console.log(action);
      const data = action.payload;
      return {
        ...state,
        data,
      };
    }
    default:
      return state;
  }
}
