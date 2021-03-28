import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://apigarangas.pubjaiz.com.br/public/api';

const request = async (method, endpoint, params, token = null) => {
  method = method.toLowerCase();
  let fullUrl = `${baseUrl}${endpoint}`;
  let body = null;

  switch (method) {
    case 'get':
      let queryString = new URLSearchParams(params).toString();
      fullUrl += `?${queryString}`;
      break;
    case 'post':
    case 'put':
    case 'delete':
      body = JSON.stringify(params);
      break;

    default:
  }

  let headers = {'Content-Type': 'application/json'};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let req = await fetch(fullUrl, {
    method,
    headers,
    body,
  });

  let json = req.json();
  return json;
};

export default {
  getToken: async () => {
    return await AsyncStorage.getItem('token');
  },
  validateToken: async () => {
    let token = await AsyncStorage.getItem('token');
    let json = await request('post', '/auth/validate', {}, token);
    return json;
  },
  getUrlLink: async () => {
    let json = await request('get', '/link/movie', {});
    return json;
  },
  getEvent: async () => {
    let json = await request('get', '/event', {});
    return json;
  },
  getProjects: async () => {
    let json = await request('get', '/project', {});
    return json;
  },
};
