import React from 'react'
import LoginRoutes from './Login.routes'
import AppRoutes from './App.routes'
import { useAuth } from '../context/AuthContext'

const Routes = () => {
    const { user } = useAuth();
  return (
    <>       
        {!user.name ? <LoginRoutes/> : <AppRoutes/>}
    </>
  )
}

export default Routes