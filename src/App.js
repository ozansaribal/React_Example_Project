import React, {useState} from 'react';
import './App.css';
import ToDoTable from './Components/ToDoTable';
import NewToDoForm from './Components/NewToDoForm';

function App() {

  const [showAddToDoForm, setShowAddToDoForm] = useState(false);

  const [todos, setTodos] = useState([
    {rowNumber:1, rowDescription: 'Feed puppy', rowAssigned: 'User One'},
    {rowNumber:2, rowDescription: 'Water plants', rowAssigned: 'User Two'},
    {rowNumber:3, rowDescription: 'Make dinner', rowAssigned: 'User One'},
    {rowNumber:4, rowDescription: 'Charge Phone Battery', rowAssigned: 'User One'}
  ]
  )

  const addToDo = (description, assigned) => {
    let rowNumber = 0;
    if(todos.length>0){
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
      const newToDo = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newToDo])
  }

  const deleteToDo = (deleteToDoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteToDoRowNumber;
    });
    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <ToDoTable todos={todos} deleteToDo={deleteToDo}/>
          <button onClick={() => setShowAddToDoForm(!showAddToDoForm)}className='btn btn-primary'>
            {showAddToDoForm ? 'Close New ToDo' : 'New Todo'}
          </button>
        {showAddToDoForm &&
          <NewToDoForm addToDo={addToDo}/>
        }
        </div>
      </div>
    </div>
  );
}

export default App;
