import axios from 'axios';
class GithubService {
  static async getRepositories(q, category) {
    console.log(q, category);
    return await axios.get(`https://api.github.com/search/${category}?q=${q}`);
    // .then((response) => {
    //   console.log('service', response.data.items);
    //   return response.data.items;
    // });
  }
}
export default GithubService;
