import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {
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
      <Header title="Task Tracker" />
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks to show."}
    </div>
  );
}
/*can only have one parent element after return (in this case just the div)*/
export default App;
