import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '53f3dc5893dd4cc8997ac1ecf6ac5420',
  },
});
