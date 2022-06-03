import {
  GET_REPOSITORIES,
  CLEAR_STATE,
  PERSIST_QUERY,
  PERSIST_CATEGORY,
} from '../actions/Repository/repositoryTypes';

const init = {
  query: '',
  category: '',
  repositories: [],
};
export default function repositoryReducer(state = init, action) {
  switch (action.type) {
    case GET_REPOSITORIES: {
      const data = action.payload.repositories;
      return {
        repositories: [...data],
        query: action.payload.query,
        category: action.payload.category,
      };
    }
    case CLEAR_STATE: {
      return {
        repositories: [],
        query: '',
        category: '',
      };
    }
    case PERSIST_CATEGORY: {
      const category = action.payload;
      return {
        ...state,
        category,
      };
    }
    case PERSIST_QUERY: {
      const query = action.payload;
      return {
        ...state,
        query,
      };
    }
    default:
      return state;
  }
}
