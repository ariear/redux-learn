import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getMode } from "../slices/modeSlice"
import { Outlet } from "react-router-dom"

const Navbar = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMode())
    }, [])

    return (
        <div>
            <nav>
                <p>Ini Navbar</p>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar