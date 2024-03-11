export const addTodo = async (todo) => {
    let obj = { text: todo }
    let response = await fetch('http://localhost:4000/todos/item', {
        // type opf request
        method: 'POST',
        // sending body, stringify the obj
        body: JSON.stringify(obj),
        // type of content
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()
    return json
}