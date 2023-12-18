import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, registerUser } from '../redux/user/action'
import { useNavigate } from 'react-router-dom'
import { selectUser } from '../redux/user/selectors'
import { z } from "zod"
import { MdOutlineSignalCellularNull } from 'react-icons/md'

const User = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

const Auth = () => {

    const [status, setStatus] = React.useState("Sign Up")
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [repeatPassword, setRepeatPassword] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [error, setError] = React.useState(MdOutlineSignalCellularNull)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleAuth = () => {
        try {
            const user = User.parse({
                email,
                password
            })
            setError(null)
            if (status.includes("Up")) {
                dispatch(registerUser(username, email, password))
                navigate("/")
            } else {
                dispatch(loginUser(email, password))
                navigate("/")
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                setError(error.format())
            }
        }
    }

    const user = useSelector(selectUser)

    if (user?.email && localStorage.getItem("persist:root")) {
        navigate("/")
    }

    return (
        <form className='pt-40 flex flex-col justify-center items-center w-96'>
            <h1 className='mb-5'>{status}</h1>
            {
                status.includes("Up")
                && <input
                    className='bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none'
                    type="text"
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Username" />
            }
            <input
                className='bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none'
                onChange={e => setEmail(e.target.value)}
                placeholder="Email" />
            <input
                className='bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none'
                type="password"
                onChange={e => setPassword(e.target.value)}
                placeholder="Password" />
            {
                status.includes("Up")
                && <input
                    className='bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none'
                    type="password"
                    onChange={e => setRepeatPassword(e.target.value)}
                    placeholder="Repeat password" />
            }
            <button
                onClick={handleAuth}
                className='mb-3 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
                type='submit'>{status}</button>
            <div>
                {
                    status.includes("Up")
                        ? <p className='underline text-sm cursor-pointer' onClick={() => setStatus("Sign In")}>Login here</p>
                        : <p className='underline text-sm cursor-pointer' onClick={() => setStatus("Sign Up")}>Register here</p>
                }
            </div>
            {error?.email && <p className='text-red-600'>{error?.email?._errors}</p>}
            {error?.password && <p className='text-red-600'>{error?.password?._errors}</p>}
        </form>
    )
}

export default Auth