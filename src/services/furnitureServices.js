const appId = '7B1B18AC-E462-0941-FFC8-685C32D6EF00';
const restApiKey = 'C8474548-3D0E-4A2B-9D33-51E39E7EF862';
let URL = `https://eu-api.backendless.com/${appId}/${restApiKey}/data/furnitures`;

export const getAll = (category = '') => {
  let furnitureURL = URL + ((category && category !== 'All') ? `?where=category%3D'${category}'` : '');

  return fetch(furnitureURL)
    .then(res => res.json())
    .then(furnitures => furnitures.map(x => ({...x, likes: Number(x.likes)})))
    .catch(error => console.log(error));
};

export const getOne = (objectId) => {
  return fetch(`${URL}/${objectId}`)
    .then(res => res.json())
    .catch(error => console.log(error));
};

export const getMyFurnitures = (ownerId) => {
  return fetch(`${URL}?where=ownerId%3D'${ownerId}'`)
    .then(res => res.json())
    .catch(error => console.log(error));
};

export const create = (designerName, description, imageURL, category, ownerId) => {
  let furniture = {
    name: designerName,
    description,
    imageURL,
    category,
    likes: 0,
    ownerId
  }
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(furniture)
  });
};

export const update = (furnitureId, furniture) => {
  return fetch(`${URL}/${furnitureId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(furniture)
  });
};

export const deleteObject = (furnitureId) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const userToken = user['user-token'];

  return fetch(`${URL}/${furnitureId}`, {
    method: 'DELETE',
    headers: {
      'user-token': userToken
    },
  });
};

export const furniture = (furnitureId, likes) => {
  return fetch(`${URL}/${furnitureId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ likes })
  })
    .then(res => res.json())
    .catch((error) => console.log('Error:', error));;
}
