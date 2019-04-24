// Mutation types
const SIGN_IN = 'security/SIGN_IN'
const SIGN_UP = 'security/SIGN_UP'

function initialState () {
  return {
    // token: localStorage.getItem(USER_TOKEN_NAME) || '',
    token: '',
    // sign_in_user: {},
    // loggedInUser: JSON.parse(localStorage.getItem(USER_KEY_NAME)) || { initials: [] },
    loggedInUser: {},
    // myAccountData: {},
    users: [ { email: 'email@email.net' } ]
  }
}

// initial state
const state = initialState()

// loginSuccessCallback function
function loginSuccessCallback (response, commit, method) {
  // let token = response.data.token
  let token = 'FakeToken'
  // localStorage.setItem(USER_TOKEN_NAME, token)
  let user = {
    email: response.email
  }
  /* let user = {
    id: response.data.id,
    username: response.data.username,
    firstName: response.data.first_name,
    lastName: response.data.last_name,
    initials: response.data.initials,
    isPatient: response.data.is_patient,
    role: response.data.role,
    relationToPatient: response.data.relation_to_patient,
    isAccountActive: response.data.account_active,
    hippaAgreement: response.data.hippaAgreement
  }
  localStorage.setItem(USER_KEY_NAME, JSON.stringify(user))
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}` */
  if (commit) {
    commit(method, { token, user })
  }
  return { token, user }
}

// Actions
const actions = {
  SIGN_IN ({ commit }, credentials) {
    /* return axios.post(ENDPOINTS.SIGN_IN, credentials).then((response) => {
      loginSuccessCallback(response, commit, SIGN_IN)
    }).catch((error) => {
      return error.response
    }) */
    let response = {}
    return new Promise(function(resolve, reject) {
      let user = state.users.find(function(user) {
        return user.email === credentials.email
      });
      if (user) {
        response.status = 200
        response.email = user.email
        loginSuccessCallback(response, commit, SIGN_IN)
      } else {
        response.status = 404
        response.data = { error: 'User not found' }
      }
      resolve(response)
    })
  },

  SIGN_UP ({ commit }, data) {
    /* return axios.post(ENDPOINTS.ACCOUNT_SETUP, data)
      .then((response) => {
        loginSuccessCallback(response, commit, ACCOUNT_SETUP)
      })
      .catch((error) => {
        localStorage.removeItem(USER_TOKEN_NAME)
        localStorage.removeItem(USER_KEY_NAME)
        return error.response
      }) */
    let response = {}
    return new Promise(function(resolve, reject) {
      response.status = 200
      response.email = data.email
      loginSuccessCallback(response, commit, SIGN_UP)
      resolve(response)
    })
  }
}

// Getters
const getters = {
  isAuthenticated: state => !!state.token
}

// Mutations
const mutations = {
  [SIGN_IN] (state, data) {
    const { token, user } = data
    state.token = token
    state.loggedInUser = user
  },

  [SIGN_UP] (state, data) {
    const { token, user } = data
    state.token = token
    state.loggedInUser = user
    state.users.push(user)
  }
}

export default {
  state: { ...state },
  actions,
  getters,
  mutations
}
