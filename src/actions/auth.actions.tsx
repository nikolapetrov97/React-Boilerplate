import axios from '../helpers/axios'
import { authConstants } from './constants'

export const login = (user: any) => {
  return async (dispatch: any) => {
    dispatch({ type: authConstants.LOGIN_REQUEST })
    const res: any = await axios
      .post(`/signin`, {
        ...user,
      })
      .then((res) => {
        if (res?.status === 200) {
          const { token, user } = res.data
          sessionStorage.setItem('token', token)
          sessionStorage.setItem('user', JSON.stringify(user))
          dispatch({
            type: authConstants.LOGIN_SUCCESS,
            payload: {
              token,
              user,
            },
          })
        }
      })
      .catch((error) => {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { errors: error.response.data },
        })
      })

    if (res?.status === 200) {
      const { token, user } = res.data
      sessionStorage.setItem('token', token)
      sessionStorage.setItem('user', JSON.stringify(user))
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      })
    } else {
      if (res?.status === 400) {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: res.data.error },
        })
      }
    }
  }
}

export const isUserLoggedIn = () => {
  return async (dispatch: any) => {
    const token = sessionStorage.getItem('token')
    if (token) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error.
      const user = JSON.parse(sessionStorage.getItem('user'))
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error.
      const role = JSON.parse(sessionStorage.getItem('role'))
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
          role,
        },
      })
    } else {
      // dispatch({
      //     type: authConstants.LOGIN_FAILURE,
      //     payload: { error: "Failed to login" }
      // });
    }
  }
}

export const signout = () => {
  return async (dispatch: any) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST })
    const res = await axios.post(`/admin/signout`)

    if (res.status === 200) {
      sessionStorage.clear()
      dispatch({ type: authConstants.LOGOUT_SUCCESS })
    } else {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: { error: res.data.error },
      })
    }
  }
}
