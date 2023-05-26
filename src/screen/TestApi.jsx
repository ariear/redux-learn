import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchComments } from "../slices/commentsSlice"

const TestApi = () => {
    const comments = useSelector((state) => state.comments.data)
    const loading = useSelector((state) => state.comments.loading)
    const error = useSelector((state) => state.comments.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchComments())
    }, [dispatch])

    if (loading) {
        return <div>Loading....</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div className="m-5">
            {
                comments.map((comment) => (
                    <div key={comment.id} className="w-[400px] dark:bg-white mb-4 p-5 rounded-xl" >
                        <p>{comment.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default TestApi