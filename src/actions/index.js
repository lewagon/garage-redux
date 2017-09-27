const BASE_URL = 'https://wagon-garage-api.herokuapp.com';

export function fetchCars(garage) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url)
    .then(r => r.json());

  return {
    type: 'FETCH_CARS',
    payload: promise // Will be resolved by redux-promise
  };
}

export function removeCar(history, car) {
  const url = `${BASE_URL}/cars/${car.id}`;
  fetch(url, { method: 'DELETE' })
    .then(r => r.json())
    .then(() => history.push(""));

  return {
    type: 'REMOVE_CAR',
    payload: car
  };
}

export function addCar(history, garage, car) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ car: car })
  })
  .then(() => history.push(""))
  .then(r => r.json());

  return {
    type: 'ADD_CAR',
    payload: promise // Will be resolved by redux-promise
  };
}
