import { useEffect, useState } from "react"
import Cookies from "universal-cookie"
import Loading from "../components/Loading"
import { useNavigate } from "react-router-dom"

const LogoutPage = () => {

    const [pageWait, setWait] = useState(false)
    const cookies = new Cookies()
    const navigate = useNavigate()
    useEffect(() => {

        cookies.remove('accessToken')
        cookies.remove('user_id')

        setTimeout(() => {
            setWait(true)
        }, 2000)
    })

    if (pageWait) {
        navigate('/login')
    }
    else {
        return (
            <div>
                <Loading />
            </div>
        )

    }

}

export default LogoutPage
