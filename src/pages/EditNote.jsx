import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editNote, getNoteById } from '../redux/note/action'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { selectErrorNote, selectLoadingNotes, selectNote } from '../redux/note/selectors'
import { selectUser } from '../redux/user/selectors'

const EditNote = () => {

  const { id } = useParams()

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getNoteById(id))
  }, [dispatch])

  const loading = useSelector(selectLoadingNotes)
  const note = useSelector(selectNote)
  let error = useSelector(selectErrorNote)
  const user = useSelector(selectUser)

  const [title, setTitle] = React.useState(note?.title)
  const [description, setDescription] = React.useState(note?.description)
  const navigate = useNavigate()

  const handleSubmit = () => {
    dispatch(editNote(id, title, description))
    navigate("/notes")
  }

  if (user?.id != note?.creatorId) {
    error = "Access dined!"
    console.log("user = " + user?.id)
    console.log("note = " + note?.creatorId);
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='flex gap-10 items-center'>
        <Link
          className='mb-3 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
          to={"/notes"}
        >Back</Link>
        <h1 className='mb-20 mt-10 text-4xl text-blue-600'>Edit note</h1>
      </div>
      {loading ? <p>Loading...</p> :
        !error ?
          <form className='create flex flex-col items-center'>
            <input
              onChange={e => setTitle(e.target.value)}
              className='bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none'
              type="text"
              defaultValue={note?.title}
              placeholder="Enter title" />
            <textarea
              onChange={e => setDescription(e.target.value)}
              className='h-32 bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none h'
              type="text"
              defaultValue={note?.description}
              placeholder="Enter description" />
            <button
              onClick={handleSubmit}
              className='mb-3 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
            >Save</button>
          </form> : <p className='text-red-600 text-xl mb-40'>{error}</p>
      }
    </div>
  )
}

export default EditNote