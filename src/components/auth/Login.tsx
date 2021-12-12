import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { uid } from '../utils/constants';
import './login.css'

const Login = () => {
    const [name, setName] = useState<string | null>(null)
    const [email, setEmail] = useState<string | null>(null)
    const [error, setError] = useState<boolean>(false)

    let navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!name || !email) {
            setError(true)
        } else {
            setError(false)
            let payload = {
                id: uid(), name, email
            }
            localStorage.setItem('newsUser', JSON.stringify(payload))
            navigate('/news')
        }

    }
    return (
        <div className="text-center body" data-new-gr-c-s-check-loaded="14.1041.0" data-gr-ext-installed="">
            <form className="form-signin" onSubmit={handleSubmit}>
                <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                <div className="form-group mb-4">
                    {/* <label htmlFor="inputEmail" className="sr-only text-left">Email address</label> */}
                    <input type="email" id="inputEmail" className="form-control" onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address" autoComplete="false" />
                    {
                        error && !email && <small id="emailHelp" className="form-text  text-danger">Email is required</small>
                    }

                </div>

                <div className="form-group mb-4">
                    {/* <label htmlFor="name" className="sr-only">Username</label> */}
                    <input type="text" id="name" className="form-control" onChange={(e) => setName(e.target.value)}
                        placeholder="User Name" />
                    {
                        error && !name && <small id="emailHelp" className="form-text  text-danger">Name is required</small>
                    }                </div>

                <div className="form-group">
                    <button className="btn btn-lg btn-primary btn-block w-100" type="submit">Sign in</button>
                </div>

            </form>

        </div>
    )
}

export default Login
