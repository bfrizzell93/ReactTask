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
      console.log("delete", id)
    }
  
  return (
    <div className='container'> 
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}
/*can only have one parent element after return (in this case just the div)*/
export default App;
