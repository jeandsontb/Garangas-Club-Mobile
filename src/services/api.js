import AsyncStorage from '@react-native-async-storage/async-storage';

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
  login: async (email, password) => {
    let json = await request('post', '/auth/login', {email, password});
    return json;
  },
  logout: async () => {
    let token = await AsyncStorage.getItem('token');
    let json = await request('post', '/auth/logout', {}, token);
    await AsyncStorage.removeItem('token');
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
  getProjectsId: async id => {
    let json = await request('get', `/project/${id}`, {});
    return json;
  },
  getHistoric: async () => {
    let json = await request('get', '/historic', {});
    return json;
  },
  getMembers: async () => {
    let json = await request('get', '/member', {});
    return json;
  },
  getMemberId: async id => {
    let json = await request('get', `/member/${id}`, {});
    return json;
  },
  getCarSale: async () => {
    let json = await request('get', '/car/sale', {});
    return json;
  },
  getCarSaleId: async id => {
    let json = await request('get', `/car/sale/${id}`, {});
    return json;
  },
  //####################################### -- SERVICES PARA OS FORMS -- ################
  addPhotoProject: async file => {
    let token = await AsyncStorage.getItem('token');
    let formData = new FormData();

    formData.append('photo', {
      uri: file.uri,
      type: file.type,
      name: file.fileName,
    });

    let req = await fetch(`${baseUrl}/project/file/restrict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    let json = await req.json();
    return json;
  },
  addProject: async (
    cover,
    photos,
    name,
    title,
    description,
    futureprojects,
  ) => {
    let token = await AsyncStorage.getItem('token');

    let json = await request(
      'post',
      '/project/restrict',
      {
        name,
        title,
        description,
        futureprojects,
        cover,
        photos,
      },
      token,
    );
    return json;
  },
  editProject: async (
    id,
    cover,
    photos,
    name,
    title,
    description,
    futureprojects,
  ) => {
    let token = await AsyncStorage.getItem('token');

    let json = await request(
      'post',
      `/project/restrict/${id}`,
      {
        name,
        title,
        description,
        futureprojects,
        cover,
        photos,
      },
      token,
    );
    return json;
  },
  getProjectsMember: async id => {
    let token = await AsyncStorage.getItem('token');

    let json = await request(
      'get',
      `/project/member/restrict/${id}`,
      {},
      token,
    );
    return json;
  },
  removeProject: async id => {
    let token = await AsyncStorage.getItem('token');

    let json = await request('delete', `/project/restrict/${id}`, {}, token);
    return json;
  },
};
