import { ToastContainer, toast } from "react-toastify"
import Navigation from "../components/Navigation"
import Welcome from "../components/Welcome"
import { useEffect } from "react"

const DashboardPage = () => {

    useEffect(() => {
        toast('Login Successful', {
            autoClose: 1000
        })
    })
    return (
        <>
            <ToastContainer />
            <Navigation />
            <Welcome />
        </>
    )
}

export default DashboardPage
