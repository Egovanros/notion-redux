import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectUser, selectUserLoading } from '../redux/user/selectors'

const SecureRoute = ({ children }) => {

    let user = useSelector(selectUser)
    let loading = useSelector(selectUserLoading)

    if (loading) {
        return <p>Loading...</p>
    }
    if (!user?.email) {
        return <Navigate to="/auth" replace/>
    }
    return children
}

export default SecureRoute