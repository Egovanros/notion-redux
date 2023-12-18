import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { createNewNote } from '../redux/note/action'
import { selectUser } from '../redux/user/selectors'



const CreateNote = () => {

  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const handleSubmit = () => {
    dispatch(createNewNote(title, description, user.id))
    navigate("/notes")
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='flex gap-10 items-baseline'>
        <Link
          className='mb-3 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
          to={"/notes"}
        >Back</Link>
        <h1 className='mb-20 mt-10 text-2xl text-blue-600'>Create new Note</h1>
      </div>
      <form onSubmit={handleSubmit} className='create flex flex-col items-center'>
        <input
          onChange={e => setTitle(e.target.value)}
          className='bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none'
          type="text"
          placeholder="Enter title" />
        <textarea
          onChange={e => setDescription(e.target.value)}
          className='h-32 bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none h'
          type="text"
          placeholder="Enter description" />
        <button
          onClick={handleSubmit}
          className='mb-3 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
          type='button'
        >Create</button>
      </form>
    </div>
  )
}

export default CreateNote