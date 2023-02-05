/* eslint-disable class-methods-use-this */
import axios from 'axios';

export default class FakeYoutube {
  // constructor() { }

  async Search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword() {
    return axios
      .get('/videos/search.json')
      .then(res => res.data.items)
      .then(itmes => itmes.map(item => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return axios.get('/videos/popular.json').then(res => res.data.items);
  }
}
