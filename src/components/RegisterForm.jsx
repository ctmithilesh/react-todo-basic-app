/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import FormComponent from "./FormComponent";
import NewForm from "./NewForm";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import FormLabel from "./FormLabel";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";
import { ToastContainer, toast } from "react-toastify";
const API = 'https://stingray-app-2uvnh.ondigitalocean.app/api/auth/signup'

const RegisterForm = () => {

    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [username, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleInputChange = (e) => {
        const target = e.target;
        const name = e.target.name;
        const value = target.value;
        console.log(value);
        if (name === "username") {
            setUserName(value);
        }
        if (name === "email") {
            setEmail(value);
        }
        if (name === "password") {
            setPassword(value);
        }
    };
    const submitData = async () => {
        console.log(username, email, password);
        try {
            await axios
                .post(`${API}`, { username, email, password })
                .then((res) => {
                    console.log(res);




                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (e) {
            console.log(e);
        }
        setTimeout(() => {
            navigate('/login')
        }, 1000)
        toast('User Registered Successfully!')
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <ToastContainer />
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register</h1>
                    <p className="py-6">
                        Register as New User
                    </p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(submitData)}>
                        <div className="form-control">
                            <FormLabel label="username" />
                            <input
                                type="text"
                                placeholder="username"
                                className="input input-bordered"
                                onChangeCapture={handleInputChange}
                                {...register('username', { required: true })}
                            />
                            {errors.email && <small className="text-red-400">Email is required </small>}

                        </div>
                        <div className="form-control">
                            <FormLabel label="email" />
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                onChangeCapture={handleInputChange}
                                {...register('email', { required: true })}
                            />
                            {errors.email && <small className="text-red-400">Email is required </small>}

                        </div>
                        <div className="form-control">
                            <FormLabel label="password" />
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                onChangeCapture={handleInputChange}
                                {...register('password', { required: true })}
                            />
                            {errors.email && <small className="text-red-400">Password is required </small>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="form-control mt-6">
                        <p
                            className="bg-blue-300 text-center hover:cursor-auto"

                            onClick={() => navigate('login')}
                        >Click here to Login

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
