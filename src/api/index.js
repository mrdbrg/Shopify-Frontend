export const signup = data => {
  return fetch(`http://localhost:3000/api/v1/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(r => r.json())
}

export const loginUser = data => {
  return fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(r => r.json())
}

export const autologin = userToken => {
  return fetch(`http://localhost:3000/api/v1/autologin`, {
    headers: {
      'Authorization': `Bearer ${userToken}`
    }
  })
  .then(r => r.json())
}