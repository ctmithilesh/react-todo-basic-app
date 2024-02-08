/* eslint-disable no-unused-vars */
import { ToastContainer, toast } from "react-toastify"
import Navigation from "../components/Navigation"
import { useEffect } from "react"
import TodoTable from "../components/TodoTable"
import Cookies from "universal-cookie"

const DashboardPage = () => {

    const cookies = new Cookies()
    const accessToken = cookies.get('accessToken')

    console.log(accessToken)
    useEffect(() => {
        toast('Login Successful', {
            autoClose: 5000,
            hideProgressBar: true
        })
    })
    return (
        <>
            <ToastContainer />
            <Navigation />
            <TodoTable />
        </>
    )
}

export default DashboardPage
