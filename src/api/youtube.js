import axios from 'axios';

export async function Search(keyword) {
  return axios.get(`videos/${keyword ? 'search' : 'popular'}.json`).then(res => res.data.items);
}
