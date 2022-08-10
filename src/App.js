import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([
    {   id: 1,
        text: "Grocery Shopping",
        day: "Saturdays @ 3:00pm",
        reminder: true,
    },
    {   id:2,
        text: "D&D",
        day: "Mondays @ 6:00pm",
        reminder: true,
    },
    {   id:3,
        text: "Tennis Practice",
        day: "Saturdays @ 8:00pm",
        reminder: true,
    },
    ])

    //Add task
    const addTask = (task) => {
      const id= Math.floor(Math.random()* 10000 +1)
      const newTask = {id,...task} //assigns a random id to a task
      setTasks([...tasks, newTask]) //adds new task to list
    }

    //Delete task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task)=>task.id !== id))
    }

    //Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder}: task))
    }
  
  return (
    <div className='container'> 
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks to show."}
    </div>
  );
}
/*can only have one parent element after return (in this case just the div)*/
export default App;
