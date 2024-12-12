import { TodoCard } from "./TodoCard";



export function TodoList(props) {
    const {todos, selectedTab, handleDeleteTodo, handleCompleteTodo} = props
    

    const filterTodos = selectedTab === 'All' ? 
    todos
    : selectedTab === 'Open' ? todos.filter(val => !val.complete)
    : todos.filter(val => val.complete)

    return (
        <>
        {
            filterTodos.map((todo, todoIndex) => {
                return(
                    <TodoCard key={todoIndex} {...props} todoIndex={todos.findIndex(val => val.input = todo.input)} todo ={todo}/>
                )
            })
        }
        </>
            
    )
}