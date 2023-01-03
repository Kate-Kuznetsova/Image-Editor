const users = []
let loggedUser = null;

const logoutBtn = document.querySelector('#logOutBtn')
const newUserPanel = document.querySelector('.newUserPanel')
const userPanel = document.querySelector('.UserPanel')
const modalBody = document.querySelector('.modal-body')
const regForm = document.querySelector('#regForm')
const loginForm = document.querySelector('#loginForm')
const userLabel = document.querySelector('#userLabel')


newUserPanel.hidden = false
userPanel.hidden = true
userLabel.hidden = true

logoutBtn.onclick = async () => {
  await requestLogout()
  newUserPanel.hidden = false
  userPanel.hidden = true
  userLabel.hidden = true
  userLabel.innerText = null

  // delete localStorage.userName
  // delete localStorage.email
  // delete localStorage.password
}

modalBody.onclick = e => {
  if (e.target == modalBody) modalBody.close()
}

regForm.onsubmit = handleRegistation

loginForm.onsubmit = handleLogin

async function handleLogin() {
  const user = {
    userName: loginForm.nameInput.value,
    email: loginForm.emailnput.value,
    pass: loginForm.passwordInput.value
  }

  loggedUser = await requestLogin(user)

  if (loggedUser) {
    bootstrap.Modal.getInstance("#logIin").hide()
    loginForm.reset()
    userPanel.hidden = false
    newUserPanel.hidden = true
    userLabel.innerText = 'Hello, ' + user.userName
    userLabel.hidden = false    

    // localStorage.userName = user.userName
    // localStorage.email = user.email
    // localStorage.password = user.pass
  } else {
    alert('Wrong login or password!')
  }

  await requestRegistration(user)

}

async function requestLogin(user) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }

  const response = await fetch('/api/login', options)

  return response.ok ? user : null
}

async function handleRegistation() {
  const user = {
    userName: regForm.nameInputReg.value,
    email: regForm.emailnputReg.value,
    pass: regForm.passwordInputReg.value
  }
  userPanel.hidden = false
  newUserPanel.hidden = true
  userLabel.innerText = 'Hello, ' + user.userName
  userLabel.hidden = false 

  // localStorage.userName = user.userName
  // localStorage.email = user.email
  // localStorage.password = user.pass

  await requestRegistration(user)

  bootstrap.Modal.getInstance("#register").hide()
  // bootstrap.Modal.getInstance("#register").reset()
  // regForm.reset()
}

async function requestRegistration(user) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }

  const response = await fetch('/api/register', options)
  return response.ok ? user : null
}

async function requestLogout() {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loggedUser)
  }

  const response = await fetch('/api/logout', options)

  return response.ok
}