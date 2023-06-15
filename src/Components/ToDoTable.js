import ToDoRowItem from "./ToDoRowItem"

function ToDoTable(props) {
    return(
        <table>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(todo => (
                    <ToDoRowItem
                        key={todo.rowNumber}
                        rowNumber={todo.rowNumber}
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned}
                        deleteToDo={props.deleteToDo}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default ToDoTable