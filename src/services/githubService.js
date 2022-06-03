import axios from 'axios';
class GithubService {
  static async getRepositories(q, category, page) {
    console.log(category);
    return await axios.get(
      `https://api.github.com/search/${category}?q=${q}&page=${page}&per_page=20`
    );
    // .then((response) => {
    //   console.log('service', response.data.items);
    //   return response.data.items;
    // });
  }
}
export default GithubService;
