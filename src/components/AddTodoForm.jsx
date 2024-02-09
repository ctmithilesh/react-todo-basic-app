/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "universal-cookie";
import ErrorMessage from "./ErrorMessage";
const API = 'https://stingray-app-2uvnh.ondigitalocean.app/api/todo/add'

const AddTodoForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const cookies = new Cookies();
    const user_id = cookies.get("user_id");
    const [todo, setData] = useState({});

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const target = e.target;
        const name = e.target.name;
        const value = e.target.value;
        if (name === "todo_title") {
            setData({ ...todo, todo_title: value });
        }
        if (name == "todo_description") {
            setData({ ...todo, todo_description: value });
        }
    };

    const submitData = async (values) => {
        console.log(values)
        const { todo_title, todo_description, user_id } = values
        try {
            await axios.post(`${API}`, { todo_title, todo_description, user_id })
                .then(res => {
                    console.log(res)
                    toast('Todo Added Successfully!', {
                        type: 'success',
                        hideProgressBar: true,
                        autoClose: 5000
                    })
                    navigate('/dashboard')
                })
                .catch(err => {
                    console.log(err)
                    toast('Something went Wrong')
                })
        }
        catch (e) {
            console.log(e)
        }

    }

    return (
        <div className="hero bg-base-200 w-full h-full">
            <ToastContainer />
            <div className="hero-content text-center">
                <form className="max-w-md" onSubmit={handleSubmit(submitData)}>
                    <div>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            {...register('todo_title', { required: true })}
                        />
                        <div>
                            {errors.todo_title && <ErrorMessage error="Todo Title" />}
                        </div>

                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            {...register('todo_description', { required: true })}
                        />
                        <div>
                            {errors.todo_description && <ErrorMessage title="Todo Description" />}
                        </div>
                    </div>
                    <div>
                        <input
                            type="hidden"
                            name="user_id"
                            value={user_id}
                            {...register('user_id', { required: false })}
                        />
                    </div>
                    <div className="mt-2">
                        <button className="btn btn-primary">Add Todo </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTodoForm;
