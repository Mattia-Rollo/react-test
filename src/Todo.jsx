

export default function ToDo({ todo }) {
  
    return (
      <div>
        <label>
            <input type="checkbox" checked={todo.completed} />
            <span className="p-3">{todo.name}</span> 
            ({todo.id})
        </label>
        </div>
    )
}

