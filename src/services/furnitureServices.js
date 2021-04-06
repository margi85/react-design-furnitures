const appId = '7B1B18AC-E462-0941-FFC8-685C32D6EF00';
const restApiKey = 'C8474548-3D0E-4A2B-9D33-51E39E7EF862';
let URL = `https://eu-api.backendless.com/${appId}/${restApiKey}/data/furnitures`;

export const getAll = (category = '') => {
  let furnitureURL = URL + ((category && category !== 'All') ? `?where=category%3D'${category}'` : '');

  return fetch(furnitureURL)
    .then(res => res.json())
    .catch(error => console.log(error));
};

export const getOne = (objectId) => {
  return fetch(`${URL}/${objectId}`)
    .then(res => res.json())
    .catch(error => console.log(error));
};

export const create = (designerName, description, imageURL, category) => {
  let furniture = {
    name: designerName,
    description,
    imageURL,
    category
  }
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(furniture)
  });
};

// export const update = (furniture) => {
//   return fetch(`${URL}/${furniture.objectId}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(furniture)
//   });
// };

export const update = (furnitureId, furniture) => {
  return fetch(`${URL}/${furnitureId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(furniture)
  });
};
