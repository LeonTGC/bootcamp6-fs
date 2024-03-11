import AddTodo from "./pages/AddTodo"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />
          <Route 
            path='/add-todo'
            element={<AddTodo />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App 