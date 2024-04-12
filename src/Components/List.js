import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './List.css';

const List = ({ task, deleteTask, editTask, updateTask, isEdit }) => {
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id);
  };

  const handleUpdate = () => {

    if (editText) {
      updateTask(task.id, editText);
    } else {
      alert("Edit")

    }


  };

  return (
    <>
      <div className='list-container' key={task.id}>
        <div className='task-text'>
          {isEdit ? (
            <input
              className='inp w-75'
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            <p>{task.text}</p>
          )}
        </div>
        <div>
          {/* <button className='btn btn-success mx-1' type="button" onClick={handleEdit}>
            {isEdit ? 'Save' : 'Edit'}
          </button> */}
          {isEdit ? (
            <button className='btn btn-success mx-1' id="primary" data-mdb-button-init data-mdb-ripple-init type="button" onClick={handleUpdate}>Save</button>
          ) :
            (<button className='btn btn-success mx-1' type="button" onClick={handleEdit}>Edit</button>)}

          <button className='btn btn-danger' type="button" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
