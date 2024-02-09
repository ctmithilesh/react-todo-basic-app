/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
const API = 'https://stingray-app-2uvnh.ondigitalocean.app/api/todo/find/user'
const TodoTable = () => {

    const cookies = new Cookies()
    const user_id = cookies.get('user_id')
    
    const [data, setData] = useState(null)
    const dataNotFound = data != null

    // Lifecycle Method - acts like componentDidMount and componentDidUpdate
    // First method to get triggered
    useEffect(() => {
        fetchTodos()
    }, [dataNotFound])


    const fetchTodos = async () => {
        try {
            await axios.post(`${API}`, { user_id })
                .then(res => {
                    console.log(res)
                    setData(res.data)
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
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Todo Title </th>
                        <th>Todo Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {data != null && data.length > 0 ? data.map((item, index) => (
                        <tr key={index}>
                            <th>{item.todo_title}</th>
                            <td>{item.todo_description}</td>
                            <td>
                                <Link to={`/delete-todo/${item.id}`}>
                                    Delete
                                </Link>
                            </td>
                        </tr>

                    )) : <Loading />}

                    {/* row 2 */}

                </tbody>
            </table>
        </div>
    )
}

export default TodoTable
