import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
const API = 'https://stingray-app-2uvnh.ondigitalocean.app/api/todo/delete'
const DeletePage = () => {

    const params = useParams()
    const navigate = useNavigate()
    console.log(params)
    const { id } = params
    const todo_id = id 

    const deleteTodo = async () => {
        try {
            await axios.post(`${API}`, { todo_id })
                .then(res => {
                    console.log(res)
                    toast('Deleted!', {
                        type: 'success',
                        hideProgressBar: true,
                        autoClose: 5000
                    })
                    navigate('/dashboard')
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
        <div>
            <ToastContainer />
            <h1>Delete Todo Page </h1>
            <strong>Are you sure you want to delete? </strong>
            <button onClick={deleteTodo}>
                Yes
            </button>
        </div>
    )
}

export default DeletePage
