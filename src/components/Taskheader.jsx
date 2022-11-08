import React from "react";
import { FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";

const Taskheader = () => {
  const Iconstyle = { fontSize: "18px", color: "purple" };

  const addAlert = async () => {

     const { value: formValues } = await Swal.fire({
      title: 'Add your new task',
      html:
        `<div class='todo-alert-input'><label>Title</label>
        <input id="swal-input1" class="swal2-input-title" type="text"></div>
         <div class='todo-alert-input'><label>task description</label>
        <textarea type="text" rows="7" cols="40" id="swal-input2" class="swal2-input-desc"></textarea></div>`,
      focusConfirm: false,

      preConfirm: () => {
       
          let a  = document.getElementById('swal-input1').value
          let b = document.getElementById('swal-input2').value
          return `${a} ${b}`
     
    }

    })
    
    if (!formValues) {
      Swal.fire({text: 'No tasks, createOne'})
    } else if (formValues) {
      Swal.fire(JSON.stringify(formValues))
    }

  };

  return (
    <section className="Todo-header">
      <h4>Have a new plan ?</h4>
      <input type={"text"} placeholder="search tasks..." />
      <div className="Todo-action-buttons-holder">
        <button onClick={addAlert}>
          <FaPlus style={Iconstyle} />
          Add
        </button>
      </div>
      
    </section>
  );
};

export default Taskheader;
