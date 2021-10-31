import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Layout from '../Layout'

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Layout>
      <Route
        {...rest}
        component={(props: any) => {
          const token = window.sessionStorage.getItem('token')
          console.log(token, 'token')
          if (token) {
            return <Component {...props} />
          } else {
            return <Redirect to={`/login`} />
          }
        }}
      />
    </Layout>
  )
}

export default PrivateRoute
