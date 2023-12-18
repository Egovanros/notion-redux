import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteNote, getNoteById } from '../redux/note/action'
import { selectErrorNote, selectLoadingNotes, selectNote } from '../redux/note/selectors'
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md"
import { Link } from 'react-router-dom'

const SingleNote = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getNoteById(id))
    }, [])

    const note = useSelector(selectNote)
    const error = useSelector(selectErrorNote)
    const loading = useSelector(selectLoadingNotes)

    const handleDelete = () => {
        dispatch(deleteNote(note.id, note.creatorId))
        navigate("/notes")
    }

    return (
        <div>
            {
                loading
                    ? <p>Loading...</p>
                    : !error
                        ? <div className='flex flex-col create my-10'>
                            <div className='flex justify-between mb-5'>
                                <Link className='mb-3 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded' to="/notes">
                                    Back
                                </Link>
                                <h2>{note?.title}</h2>
                                <div className='flex gap-5'>
                                    <Link to={`/edit-note/${note?.id}`}>
                                        <MdOutlineModeEdit className='cursor-pointer text-lg' />
                                    </Link>
                                    <MdDeleteOutline onClick={handleDelete} className='cursor-pointer text-lg' />
                                </div>
                            </div>
                            <p className='w-full bg-slate-100 p-5'>
                                {note?.description}
                            </p>
                        </div>
                        : <p className='text-red-600 text-xl'>{error.includes("404") ? "There are no notes with this ID" : "Something went wrong..."}</p>
            }
        </div>
    )
}

export default SingleNote