const sign_up = (request, response, next) => {
  response.send('sign up route')
}

const login = (request, response, next) => {
  response.send('login route')
}

module.exports = {
  sign_up, login
}