/* eslint-disable no-unused-vars */

import { useForm } from "react-hook-form"
import FormLabel from "./FormLabel"
import { useState } from "react"
import axios from "axios"
const API = 'https://stingray-app-2uvnh.ondigitalocean.app/api/auth/signup'

const NewForm = () => {

    const [username, setUserName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleInputChange = (e) => {
        const target = e.target
        const name = e.target.name
        const value = target.value
        console.log(value)
        if (name === 'username') {
            setUserName(value)
        }
        if (name === 'email') {
            setEmail(value)
        }
        if (name === 'password') {
            setPassword(value)
        }

    }
    const submitData = async () => {
        console.log(username, email, password)
        try {
            await axios.post(`${API}`, { username, email, password })
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })

        }
        catch (e) {
            console.log(e)
        }

    }
    return (
        <form>
            <div className="form-control">
                <FormLabel label="username" />
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    className="input input-bordered"
                    onChangeCapture={handleInputChange}

                />
            </div>
            <div className="form-control">
                <FormLabel label="email" />
                <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    onChangeCapture={handleInputChange}

                />
            </div>
            <div className="form-control">
                <FormLabel label="password" />
                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    onChangeCapture={handleInputChange}

                />
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary"
                    onClick={submitData}
                >
                    Login

                </button>
            </div>
        </form>
    )
}

export default NewForm
