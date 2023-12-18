import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllNotes, selectLoadingNotes } from '../redux/note/selectors'
import { getAllNotes } from '../redux/note/action'
import Note from '../components/Note'
import { selectUser } from '../redux/user/selectors'

const Notes = () => {

    const dispatch = useDispatch()

    const user = useSelector(selectUser)

    React.useEffect(() => {
        dispatch(getAllNotes(user.id))
    }, [dispatch])

    const notes = useSelector(selectAllNotes)
    const loading = useSelector(selectLoadingNotes)

    console.log(notes)
    return (
        <div className='flex flex-col items-center'>
            <h2 className='mb-10 mt-10 text-4xl text-blue-600'>Notes</h2>
            <Link
                className='mb-3 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
                to={"/create-note"}>Add new note</Link>
            <div>
                <div>
                    {
                        loading
                            ? <p>Loading...</p>
                            : <ul className='mt-5'>
                                {notes[0] &&
                                    notes.sort((a, b) => b.createdAt - a.createdAt).map(note => (
                                        <Note note={note} key={note.id} />
                                    ))
                                }
                                {!notes[0] && <p>Empty...</p>}
                            </ul>
                    }
                </div>
            </div>
        </div>
    )
}

export default Notes