import { useState, useEffect } from 'react'
import React from 'react'
import './Additems.css'
import List from './List'

const getItems = () => {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    return JSON.parse(localStorage.getItem('tasks'));
  } else {
    return [];
  }
}


const Additems = () => {

  const [text, setText] = useState('')
  const [tasks, setTask] = useState(getItems());

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      text,
      isEdit: false,
    };

    if (text) {
      setTask([...tasks, newTask]);
    }

    setText("")
  }

  const deleteTask = (id) => {
    setTask(tasks.filter(task => task.id !== id));
  }

  const editTask = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, isEdit: !task.isEdit } : task
      )
    );
  };

  const updateTask = (id, newText) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText, isEdit: false } : task
      )
    );
  };

  return (
    <>
      <div className='inp-container'>
        <input className='inp' type="text" value={text} placeholder='Add a task' onChange={e => setText(e.target.value)} />
        <button className='btn btn-primary' type="submit" onClick={addTask}>Add</button>
      </div >

      {
        tasks.map((task) =>
          <List task={task} key={task.id} deleteTask={deleteTask} updateTask={updateTask} editTask={editTask} isEdit={task.isEdit} />
        )
      }
    </>
  )
}

export default Additems