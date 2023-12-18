import { instance } from "../../axios"

export const getAllNotes = creatorId => async dispatch => {
    dispatch({ type: "NOTE/FETCH/START" })
    try {
        const notes = await instance.get(`/notes?creatorId=${creatorId}`)
        dispatch({ type: "NOTE/FETCH/SUCCESS", payload: notes.data })
    } catch (error) {
        dispatch({ type: "NOTE/FETCH/ERROR", payload: error.message })
    }
}

export const getNoteById = id => async dispatch => {
    dispatch({ type: "NOTE/FETCH/START" })
    try {
        const note = await instance.get(`/notes/${id}`)
        dispatch({ type: "NOTE/GET_ONE/SUCCESS", payload: note.data })
    } catch (error) {
        dispatch({ type: "NOTE/FETCH/ERROR", payload: error.message })
    }
}

export const createNewNote = (title, description, creatorId) => async dispatch => {
    dispatch({ type: "NOTE/FETCH/START" })
    try {
        await instance.post("/notes",
            {
                title: title,
                description: description,
                creatorId: creatorId,
                createdAt: Date.now()
            }
        )
        dispatch({ type: "NOTE/POST/SUCCESS" })
    } catch (error) {
        dispatch({ type: "NOTE/FETCH/ERROR", payload: error.message })
    }
} 

export const editNote = (id, title, description) => async dispatch => {
    dispatch({ type: "NOTE/FETCH/START" })
    try {
        await instance.patch(`/notes/${id}`,
            {
                title: title,
                description: description,
            }
        )
        dispatch({ type: "NOTE/POST/SUCCESS" })
    } catch (error) {
        dispatch({ type: "NOTE/FETCH/ERROR", payload: error.message })
    }
}

export const deleteNote = (id, creatorId) => async dispatch => {
    dispatch({ type: "NOTE/FETCH/START" })
    try {
        await instance.delete(`/notes/${id}`)
        const notes = await instance.get(`/notes?creatorId=${creatorId}`)
        dispatch({ type: "NOTE/FETCH/SUCCESS", payload: notes.data })
    } catch (error) {
        dispatch({ type: "NOTE/FETCH/ERROR", payload: error.message })
    }
}