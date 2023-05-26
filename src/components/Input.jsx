import { useDispatch, useSelector } from "react-redux"
import { setInput } from "../slices/inputSlice"

const Input = () => {
    const input = useSelector((state) => state.input)
    const dispatch = useDispatch()

    return (
        <div className="m-5">
            <input type="text" placeholder="Input here" value={input} onChange={(e) => dispatch(setInput(e.target.value))} className="py-2 px-4 rounded-md border-2" />
            <p>{input}</p>
        </div>
    )
}

export default Input