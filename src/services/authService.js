const appId = '7B1B18AC-E462-0941-FFC8-685C32D6EF00';
const restApiKey = 'C8474548-3D0E-4A2B-9D33-51E39E7EF862';
let URL = `https://eu-api.backendless.com/${appId}/${restApiKey}/users`;

export const login = (email, password) => {
  let user = {
    login: email,
    password 
  }
  return fetch(`${URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
};

export const register = (name, email, password, phone, ) => {
  let user = {
    name,
    email,
    password,
    phone,
  }
  return fetch(`${URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
}

export const logout = () => {
const user = JSON.parse(localStorage.getItem('user'))
const userToken = user['user-token'];
console.log(user);
console.log(userToken);

  return fetch(`${URL}/logout`, {
    method: 'GET',
    headers: {
      'user-token': userToken
    },
  });
};
