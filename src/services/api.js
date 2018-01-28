const API_ROOT = `http://localhost:3001/api`;


const token = localStorage.getItem('token')

const headers = {
  "Content-Type": 'application/json',
  Accepts: 'application/json',
  Authorization: token
};

const getTrips = () => {
  return fetch(`${API_ROOT}/trips`)
  .then(res => res.json())
}

const getUserTrips = (id) => {
  return fetch(`${API_ROOT}/users/${id}`)
  .then(res => res.json())
}

const newTrip = (trip) => {
  return fetch(`${API_ROOT}/trips`, {
    method: "post",
    headers: headers,
    body: JSON.stringify(trip)
  })
  .then(res => res.json())
}

const deleteTrip = (id) => {
  return fetch(`${API_ROOT}/trips/${id}`, {
    method: "delete",
    headers: headers
  })
}

const editTrip = (trip) => {
  return fetch(`${API_ROOT}/trips/${trip["id"]}`, {
    method: "PATCH",
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    body: JSON.stringify(trip)
  }).then(res => res.json())
}

const login = (username, password) => {
  return fetch(`${API_ROOT}/auth`, {
    method: 'post',
    headers: headers,
    body: JSON.stringify({username,password})
  })
  .then(res => res.json());
}


const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers
  })
  .then(res => res.json());
}

const newUser = (user) => {
  return fetch(`${API_ROOT}/users`, {
    method: "post",
    headers: headers,
    body: JSON.stringify(user)
  })
  .then(res => res.json())
}

export default {
  auth: {
    login,
    getCurrentUser
  },
  trips: {
    getTrips,
    getUserTrips,
    newTrip,
    deleteTrip,
    editTrip
  },
  users: {
    newUser
  }
}
