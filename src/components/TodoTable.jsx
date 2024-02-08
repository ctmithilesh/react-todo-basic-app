/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import { Link } from 'react-router-dom'
const API = 'https://stingray-app-2uvnh.ondigitalocean.app/api/todo/find/user'
const TodoTable = () => {

    const user_id = '64f9afc544604a35a7585aff'
    const [data, setData] = useState(null)
    const dataNotFound = data != null
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
