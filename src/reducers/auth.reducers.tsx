import { authConstants } from '../actions/constants'
console.log(sessionStorage.getItem('token'), 'undefined')
const user: any =
  sessionStorage.getItem('user') !== null
    ? sessionStorage.getItem('user')
    : null

const initState = {
  token: sessionStorage.getItem('token'),
  user: {
    firstName: user !== null ? user.firstName : '',
    lastName: user !== null ? user.lastName : '',
    email: user !== null ? user.email : '',
    role: user !== null ? user.role : '',
    picture: '',
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: '',
}

const fn = (state = initState, action: any) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      }
      break
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      }
      break
    case authConstants.LOGIN_FAILURE:
      state = {
        ...state,
        error: action.payload.errors,
        loading: false,
      }
      break
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
      }
      break
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initState,
      }
      break
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        error: action.payload.errors,
        loading: false,
      }
      break
    default:
  }
  return state
}

export default fn
