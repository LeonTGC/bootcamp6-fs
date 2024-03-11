import { useState, useEffect } from "react"
import { getTodos } from "../api/getTodos"
const Home = () => {

    const [todos, setTodos] = useState([])


    useEffect(() => {
        let fetchTodos = async () => {
            let data = await getTodos()
            setTodos(data)
        }
        fetchTodos()
    }, [])
    
    if(!todos) {
        return <h1>loading...</h1>
    }
    return (
        <div>
            <h1>home page</h1>
            {todos.map((item, index) => {
                return <h2>{item.text}</h2>
            })}
        </div>
    )
}
export default Home