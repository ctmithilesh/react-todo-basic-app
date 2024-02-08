/* eslint-disable no-unused-vars */
import { ToastContainer, toast } from "react-toastify"
import Navigation from "../components/Navigation"
import { useEffect } from "react"
import TodoTable from "../components/TodoTable"
import Cookies from "universal-cookie"

const DashboardPage = () => {

    
    return (
        <>
            <ToastContainer />
            <Navigation />
            <TodoTable />
        </>
    )
}

export default DashboardPage
