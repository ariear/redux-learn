import Counter from "../components/Counter"
import Input from "../components/Input"
import BtnChangeMode from "../components/BtnChangeMode"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <Counter />
            <Input />
            <BtnChangeMode />
            
            <Link to='/test-api' className="block py-3 px-5 w-max rounded-md bg-orange-300 dark:bg-slate-300 mt-4 ml-5" >To Rest Api Test</Link>
        </div>
    )
}

export default Home