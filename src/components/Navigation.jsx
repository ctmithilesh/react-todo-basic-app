import { Link } from "react-router-dom"
const Navigation = () => {
    return (
        <div className="navbar bg-red-300">
            <div className="flex-1">
                <Link to='/dashboard' className="btn btn-ghost text-xl">Todolist App</Link>
            </div>
            <div className="flex-none">

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link className="justify-between" to='/add-todo'>
                                Add Todo
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/logout'>
                            Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation
