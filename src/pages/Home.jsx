limport React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectUser } from '../redux/user/selectors'

const Home = ({user}) => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='mb-20 mt-10 text-4xl text-blue-600'>About me</h1>
      <div className='flex gap-1'>
        <span className='text-lg'>Email:</span>
        <p className='text-lg text-gray-600'>{user.email}</p>
      </div>
      <div className='flex gap-1'>
        <span className='text-lg'>Date sign up:</span>
                <p className='text-gray-600'>{new Date(user.createdAt).toLocaleDateString()}</p>
      </div>
      <Link to="/notes" className='my-20 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'>Go to notes</Link>
    </div>
  )
}

const propsState = state => ({user: selectUser(state)})
export default connect(propsState, null)(Home)