import { instance } from "../../axios"

export const registerUser = (username, email, password) => async dispatch => {
    dispatch({ type: "USER/FETCH/START" })
    try {
        const user = await instance.post("/users",
            {
                username: username,
                email: email,
                password: password,
                createdAt: Date.now()
            }
        )
        dispatch({ type: "USER/FETCH/SUCCESS", payload: user.data })
    } catch (error) {
        dispatch({ type: "USER/FETCH/ERROR", payload: error.message })
    }
}

export const loginUser = (email, password) => async dispatch => {
    dispatch({ type: "USER/FETCH/START" })
    try {
        const user = await instance.get(`/users?email=${email}`)
        dispatch({ type: "USER/FETCH/SUCCESS", payload: user.data[0] })
    } catch (error) {
        dispatch({ type: "USER/FETCH/ERROR", payload: error.message })
    }
}

export const getUser = id => async dispatch => {
    dispatch({ type: "USER/FETCH/START" })
    try {
        const user = await instance.get(`/users?id=${id}`)
        dispatch({ type: "USER/FETCH/SUCCESS", payload: user.data })
    } catch (error) {
        dispatch({ type: "USER/FETCH/ERROR", payload: error.message })
    }
}

