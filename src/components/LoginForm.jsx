/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useState } from "react";
import FormLabel from "./FormLabel";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const API = 'https://stingray-app-2uvnh.ondigitalocean.app/api/auth/signin'

const LoginForm = () => {

    const navigate = useNavigate()
    const cookies = new Cookies()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

 
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleInputChange = (e) => {
        const target = e.target;
        const name = e.target.name;
        const value = target.value;
        console.log(value);
       
        if (name === "email") {
            setEmail(value);
        }
        if (name === "password") {
            setPassword(value);
        }
    };
    const submitData = async () => {
        console.log(email, password);
        try {
            await axios
                .post(`${API}`, {email, password })
                .then((res) => {
                    console.log(res);
                    const { data } = res 
                    cookies.set('user_id', data.id)
                    cookies.set('accessToken', data.accessToken)
                    navigate('/dashboard')


                })
                .catch((err) => {
                    console.log(err);
                    toast('Something went wrong', {
                        type: 'error',
                        hideProgressBar: true,
                        autoClose: 5000
                    })
                });
        } catch (e) {
            console.log(e);
        }

    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <ToastContainer />
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login</h1>
                    <p className="py-6">
                        Login
                    </p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(submitData)}>
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
