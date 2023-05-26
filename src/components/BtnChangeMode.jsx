import { useDispatch } from "react-redux"
import { changeMode} from "../slices/modeSlice"

const BtnChangeMode = () => {
    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch(changeMode())} className="py-2 px-5 rounded-md bg-gray-500 hover:bg-gray-600 dark:bg-white dark:hover:bg-slate-200 dark:text-black transition-all text-white ml-5">Change Mode</button>
    )
}

export default BtnChangeMode