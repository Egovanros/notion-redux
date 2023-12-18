import React from 'react'
import { MdDeleteOutline, MdOutlineModeEdit, MdOutlineRemoveRedEye } from "react-icons/md"
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteNote } from '../redux/note/action'

const Note = ({note}) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteNote(note.id, note.creatorId))
    }

    return (
        <li className='flex items-center gap-4 mb-5 note_item p-3 justify-between'>
            <div className='flex gap-5'>
                <p>{note.title}</p>
                <p className='text-gray-600'>{new Date(note.createdAt).toLocaleDateString()}</p>
            </div>
            <div className='flex gap-5'>
                <Link to={`/notes/${note.id}`}>
                    <MdOutlineRemoveRedEye className='cursor-pointer text-lg' />
                </Link>
                <Link to={`/edit-note/${note.id}`}>
                    <MdOutlineModeEdit className='cursor-pointer text-lg' />
                </Link>
                <MdDeleteOutline onClick={handleDelete} className='cursor-pointer text-lg' />
            </div>
        </li>
    )
}

export default Note